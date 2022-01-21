import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { UpdateAdminProjectDto } from './dto/update-admin-project.dto';
import { GetAdminProjectDto } from './dto/get-admin-project.dto';

@Injectable()
export class AdminProjectService {
  constructor(private readonly prisma: PrismaService) {}

  // async findOne(user_id: string, project_id: string) {
  //   return await this.prisma.adminProject.findFirst({
  //     where: {
  //       user_id,
  //       project_id,
  //     },
  //   });
  // }

  async findAllByUser(getAdminProjectDto: GetAdminProjectDto) {
    const { user_id } = getAdminProjectDto
    return await this.prisma.userProjectFollower.findMany({
      where: {
        user_id: user_id || undefined,
      },
      include: {
        project: true
      }
    });
  }

async findAllByProject(getAdminProjectDto: GetAdminProjectDto) {
    const { project_id } = getAdminProjectDto
    return await this.prisma.userProjectFollower.findFirst({
      where: {
        project_id: project_id || undefined
      },
      include: {
        user: true
      }
    });
  }

  // USE CASE: As an admin, I can add other admins to the mosque
  async update(updateAdminProjectDto: UpdateAdminProjectDto) {
    let { user_id, project_ids } = updateAdminProjectDto;
    if (!project_ids.length) return;
    let adminProjects = [];
    const getAdminProjectDto: GetAdminProjectDto = {
      user_id: user_id
    }

    // Remove any duplicates
    project_ids = [...new Set(project_ids)]

    project_ids.forEach((project_id) => {
      adminProjects.push({
        user_id: user_id,
        project_id: project_id,
      });
    });

    await this.remove(user_id, []);

    await this.prisma.adminProject.createMany({
      data: adminProjects,
    });

    return await this.findAllByUser(getAdminProjectDto)

  }

  remove(user_id: string, project_ids: string[]) {
    return this.prisma.adminProject.deleteMany({
      where: {
        user_id: user_id,
        project_id: {
          in: project_ids.length ? project_ids : undefined,
        },
      },
    });
  }
}
