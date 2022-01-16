import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminProjectService } from './admin-project.service';
import { CreateAdminProjectDto } from './dto/create-admin-project.dto';
import { UpdateAdminProjectDto } from './dto/update-admin-project.dto';

@Controller('admin-projects')
export class AdminProjectController {
  constructor(private readonly adminProjectService: AdminProjectService) {}

  // @Post()
  // create(@Body() createAdminProjectDto: CreateAdminProjectDto) {
  //   return this.adminProjectService.create(createAdminProjectDto);
  // }

  @Get()
  findAll(@Body() project_id: string) {
    return this.adminProjectService.findAll(project_id);
  }

  @Patch()
  update(
    @Body() updateAdminProjectDto: UpdateAdminProjectDto
  ) {
    return this.adminProjectService.update(updateAdminProjectDto);
  }

  remove(@Body() user_id: string, project_ids: string[]) {
    return this.adminProjectService.remove(user_id, project_ids);
  }
}
