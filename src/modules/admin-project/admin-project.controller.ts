import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AdminProjectService } from './admin-project.service';
import { CreateAdminProjectDto } from './dto/create-admin-project.dto';
import { GetAdminProjectDto } from './dto/get-admin-project.dto';
import { UpdateAdminProjectDto } from './dto/update-admin-project.dto';

@ApiTags('Admin Projects')
@Controller('admin/projects/me')
export class AdminProjectController {
  constructor(private readonly adminProjectService: AdminProjectService) {}

  // @Post()
  // create(@Body() createAdminProjectDto: CreateAdminProjectDto) {
  //   return this.adminProjectService.create(createAdminProjectDto);
  // }

  @Get()
  findAll(@Body() getAdminProjectDto: GetAdminProjectDto) {
    return this.adminProjectService.findAllByProject(getAdminProjectDto);
  }

  @Patch()
  update(@Body() updateAdminProjectDto: UpdateAdminProjectDto) {
    return this.adminProjectService.update(updateAdminProjectDto);
  }

  // @Delete()
  // remove(@Body() user_id: string, project_ids: string[]) {
  //   return this.adminProjectService.remove(user_id, project_ids);
  // }
}
