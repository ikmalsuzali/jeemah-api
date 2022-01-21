import { GetProjectDto } from './../project/dto/get-project.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@ApiTags('Admin Projects')
@Controller('admin/projects')
export class ProjectAdminController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @ApiOperation({ summary: 'AS A SUPERADMIN, I CAN CREATE A PROJECT' })
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @Get()
  @ApiOperation({ summary: 'AS A SUPERADMIN, I CAN FIND ALL PROJECTS' })
  findAll(@Query() getProjectDto: GetProjectDto) {
    return this.projectService.findAll(getProjectDto);
  }

  @ApiOperation({ summary: 'AS A ADMIN, I CAN VIEW PROJECT DETAILS' })
  @Get(':id')
  findOne(@Param('id') id: string, @Query('has') has: string[]) {
    return this.projectService.findOne(id, has || []);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'AS A ADMIN, I CAN UPDATE MY PROJECT' })
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(id, updateProjectDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'AS A SUPERADMIN, I CAN DELETE MY PROJECT' })
  remove(@Param('id') id: string) {
    return this.projectService.remove(id);
  }
  
}
