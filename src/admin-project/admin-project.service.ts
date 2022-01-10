import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { UpdateAdminProjectDto } from './dto/update-admin-project.dto';

@Injectable()
export class AdminProjectService {
  constructor(private readonly prisma: PrismaClient) {}

  async findOne(user_id: string, project_id: string) {
    return await this.prisma.adminProject.findFirst({
      where: {
        user_id,
        project_id,
      },
    });
  }

  // USE CASE: As an admin, I can add other admins to the mosque
  async update(updateAdminProjectDto: UpdateAdminProjectDto) {
    const { user_id, project_ids } = updateAdminProjectDto;
    if (!project_ids.length) return;
    let adminProjects = [];

    project_ids.forEach((project_id) => {
      adminProjects.push({
        user_id: user_id,
        project_id: project_id,
      });
    });

    await this.remove(user_id, []);

    return await this.prisma.adminProject.createMany({
      data: adminProjects,
    });
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
