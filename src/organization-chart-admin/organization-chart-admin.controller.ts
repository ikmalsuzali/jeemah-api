import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrganizationChartAdminService } from './organization-chart-admin.service';
import { CreateOrganizationChartAdminDto } from './dto/create-organization-chart-admin.dto';
import { UpdateOrganizationChartAdminDto } from './dto/update-organization-chart-admin.dto';

@Controller('organization-chart-admin')
export class OrganizationChartAdminController {
  constructor(private readonly organizationChartAdminService: OrganizationChartAdminService) {}

  @Post()
  create(@Body() createOrganizationChartAdminDto: CreateOrganizationChartAdminDto) {
    return this.organizationChartAdminService.create(createOrganizationChartAdminDto);
  }

  @Get()
  findAll() {
    return this.organizationChartAdminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organizationChartAdminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrganizationChartAdminDto: UpdateOrganizationChartAdminDto) {
    return this.organizationChartAdminService.update(+id, updateOrganizationChartAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organizationChartAdminService.remove(+id);
  }
}
