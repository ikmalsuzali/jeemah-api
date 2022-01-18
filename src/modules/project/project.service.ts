import { GetLocationProjectDto } from './dto/get-location-project';
import { GetProjectDto } from './../project/dto/get-project.dto';
import { AddressService } from '../address/address.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Prisma } from '@prisma/client'
import geoip from 'geoip-lite';

@Injectable()
export class ProjectService {
  constructor(
    private prisma: PrismaService,
    private addressService: AddressService
  ) {}

  // USE CASE: AS AN SUPERADMIN I CAN CREATE A PROJECT
  async create(createProjectDto: CreateProjectDto) {
    let address: any = this.addressService.create(createProjectDto.address);
    return this.prisma.project.create({
      data: {
        ...createProjectDto,
        address: {
          connect: {
            id: address.id,
          },
        },
      },
    });
  }

  async findAll(search?: string, city_id?: string) {
    return await this.prisma.project.findMany({
      where: {
        name: {
          search: search || undefined,
        },
        address: {
          city_id: city_id || undefined,
        },
      },
      include: {
        address: true,
      },
    });
  }

  async findAllByRadius(getLocationProjectDto: GetLocationProjectDto) {
    const { ip_address, radius, is_metric, longitude, latitude } = getLocationProjectDto
    let lon = longitude;
    let lat = latitude;
    // FALLBACK TO IP_ADDRESS
    if (!longitude || !latitude) {
      if (ip_address) {
        let geo = null;
        try {
          geo = await geoip.lookup(ip_address);
        } catch {}

        if (geo) {
          lon = geo.ll[0];
          lat = geo.ll[1];
        }
      }
    }
    if (lon && lat) {
      return await this.prisma.$queryRaw`SELECT *, (point(longitude, latitude) <@> point(${lon}, ${lat})) AS distance
          FROM "Address"
          WHERE (point(longitude, latitude) <@> point(${lon}, ${lat})) <= 
          ${radius * (is_metric ? 1000 : 1609.34)
        }`
    }
  }

  async findOne(id: string) {
    return await this.prisma.project.findUnique({
      where: { id },
      include: { address: true },
    });
  }

  // USE CASE: As an admin, I can update my mosque details
  // USE CASE: As an admin, I can add the address and exact location of the mosque
  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const project: any = this.findOne(id);
    const address = await this.addressService.update(
      project.address.id,
      updateProjectDto.address
    );
    return await this.prisma.project.update({
      where: { id },
      data: {
        ...updateProjectDto,
        address: {
          connect: {
            id: address.id,
          },
        },
      },
      include: {
        address: true,
      },
    });
  }

  // USE CASE: As an super-admin, I can delete the mosque
  async remove(id: string) {
    const project: any = this.findOne(id);
    await this.prisma.address.delete({
      where: { id: project.address.id },
    });
    return this.prisma.project.delete({
      where: { id },
    });
  }

  async getProjectUserFollowersCount(
    project_id: string,
    start_date?: Date,
    end_date?: Date
  ) {
    return await this.prisma.userProjectFollower.count({
      where: {
        project_id: project_id,
        created_at: {
          gte: start_date || undefined,
          lte: end_date || undefined,
        },
      },
    });
  }

  async getProjectAdminsCount(
    project_id: string,
    start_date?: Date,
    end_date?: Date
  ) {
    return await this.prisma.userProjectFollower.count({
      where: {
        project_id: project_id,
        created_at: {
          gte: start_date || undefined,
          lte: end_date || undefined,
        },
      },
    });
  }
}
