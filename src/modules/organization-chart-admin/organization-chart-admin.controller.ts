import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { OrganizationChartAdminService } from './organization-chart-admin.service';
import { UpdateOrganizationChartAdminDto } from './dto/update-organization-chart-admin.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('Admin Organization Chart')
@Controller('admin/organization-chart')
export class OrganizationChartAdminController {
  constructor(
    private readonly organizationChartAdminService: OrganizationChartAdminService
  ) {}

  @Get(':project_id')
  @ApiOperation({ summary: 'AS A ADMIN, I CAN VIEW MY ORGANIZATIONAL CHART' })
  async findAll(@Param('project_id') project_id: string) {

    const organizationalChatPersons = await this.organizationChartAdminService.findAll(project_id);
    if (!organizationalChatPersons.length) {
      throw new HttpException('Record not found', HttpStatus.BAD_REQUEST);
    }
    return organizationalChatPersons
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
    @Body('user_ids') user_ids: string[]
  ) {
    return this.organizationChartAdminService.remove(
      id,
      user_ids
    );
  }
}
