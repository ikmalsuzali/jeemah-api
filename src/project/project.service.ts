import { AddressService } from './../address/address.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {
  constructor(
    private prisma: PrismaService,
    private addressService: AddressService
    ) {}
  
  async create(createProjectDto: CreateProjectDto) {
    let address: any = this.addressService.create(createProjectDto.address)
    return this.prisma.project.create({
      data: {
        ...createProjectDto,
        address: {
          connect: {
            id: address.id
          }
        }
      },
    })
  }

  async findAll(search?: string, city_id?: string) {
    return await this.prisma.project.findMany({
      where: {
        name: {
          search: search
        },
        address: {
          city_id: city_id || undefined
        }
      },
      include: {
        address: true
      }
    });
  }

  async findOne(id: string) {
    return await this.prisma.project.findUnique(
      { 
        where: { id },
        include: { address: true }
      }
    );
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const project: any = this.findOne(id)
    const address = await this.addressService.update(project.address.id, updateProjectDto.address)
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
 
  async remove(id: string) {
    const project: any = this.findOne(id);
    await this.prisma.address.delete({
      where: {id: project.address.id}
    });
    return this.prisma.project.delete({
      where: {id}
    });
  }

  async getProjectUserFollowersCount(project_id: string){
    await this.prisma.userProjectFollower.count({
      where: {
        project_id: project_id
      }
    })

  }



}
