import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrganizationChartAdminService } from './organization-chart-admin.service';
import { UpdateOrganizationChartAdminDto } from './dto/update-organization-chart-admin.dto';

@Controller('admin/organization-chart')
export class OrganizationChartAdminController {
  constructor(
    private readonly organizationChartAdminService: OrganizationChartAdminService
  ) {}

  @Get(':project_id')
  findAll(@Param('project_id') project_id: string) {
    return this.organizationChartAdminService.findAll(project_id);
  }

  @Patch(':project_id')
  update(
    @Param('project_id') id: string,
    @Body() updateOrganizationChartAdminDto: UpdateOrganizationChartAdminDto
  ) {
    return this.organizationChartAdminService.update(
      id,
      updateOrganizationChartAdminDto
    );
  }

  @Delete(':project_id')
  remove(
    @Param('project_id') id: string,
    @Body() updateOrganizationChartAdminDto: UpdateOrganizationChartAdminDto
  ) {
    return this.organizationChartAdminService.remove(
      id,
      updateOrganizationChartAdminDto
    );
  }
}
