import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { UpdateOrganizationChartAdminDto } from './dto/update-organization-chart-admin.dto';

@Injectable()
export class OrganizationChartAdminService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(project_id: string) {
    return this.prisma.organizationChartAdmin.findMany({
      where: {
        project_id: project_id,
      },
      include: {
        user: true
      }
    });
  }

  async update(
    project_id: string,
    updateOrganizationChartAdminDto: UpdateOrganizationChartAdminDto
  ) {
    const { users } = updateOrganizationChartAdminDto;
    if (!users.length) return;
    let organizationUsers = []

    users.forEach((user, index) => {
      organizationUsers.push({
        order: user.order,
        name: user.name,
        // user_id: user.id,
        project_id: project_id,
      });
    });

    await this.remove(project_id, []);

    await this.prisma.organizationChartAdmin.createMany({
      data: organizationUsers,
    });

    return await this.findAll(project_id)
  }

  remove(
    project_id: string,
    user_ids: string[]
  ) {
    return this.prisma.organizationChartAdmin.deleteMany({
      where: {
        project_id,
        user_id: {
          in: user_ids.length ? user_ids : undefined,
        },
      },
    });
  }
}
