import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { UpdateOrganizationChartAdminDto } from './dto/update-organization-chart-admin.dto';

@Injectable()
export class OrganizationChartAdminService {
  constructor(private readonly prisma: PrismaClient) {}

  // create(createOrganizationChartAdminDto: CreateOrganizationChartAdminDto) {
  //   return 'This action adds a new organizationChartAdmin';
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} organizationChartAdmin`;
  // }

  findAll() {
    return `This action returns all organizationChartAdmin`;
  }

  async update(
    updateOrganizationChartAdminDto: UpdateOrganizationChartAdminDto
  ) {
    const { users, project_id } = updateOrganizationChartAdminDto;
    if (!users.length) return;
    let organizationUsers = [];

    users.forEach((user) => {
      organizationUsers.push({
        name: user.name,
        user_id: user.id,
        order: user.order || 0,
        project_id: project_id,
      });
    });

    await this.remove(updateOrganizationChartAdminDto);

    return await this.prisma.organizationChartAdmin.createMany({
      data: organizationUsers,
    });
  }

  remove(updateOrganizationChartAdminDto: UpdateOrganizationChartAdminDto) {
    const { users, project_id } = updateOrganizationChartAdminDto;
    const user_ids = users.map((user) => user.id);

    return this.prisma.organizationChartAdmin.deleteMany({
      where: {
        project_id: project_id,
        user_id: {
          in: user_ids.length ? user_ids : undefined,
        },
      },
    });
  }
}
