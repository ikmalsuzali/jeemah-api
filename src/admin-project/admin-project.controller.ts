import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminProjectService } from './admin-project.service';
import { CreateAdminProjectDto } from './dto/create-admin-project.dto';
import { UpdateAdminProjectDto } from './dto/update-admin-project.dto';

@Controller('admin-project')
export class AdminProjectController {
  constructor(private readonly adminProjectService: AdminProjectService) {}

  @Post()
  create(@Body() createAdminProjectDto: CreateAdminProjectDto) {
    return this.adminProjectService.create(createAdminProjectDto);
  }

  @Get()
  findAll() {
    return this.adminProjectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminProjectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminProjectDto: UpdateAdminProjectDto) {
    return this.adminProjectService.update(+id, updateAdminProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminProjectService.remove(+id);
  }
}
