import { GetLocationProjectDto } from './dto/get-location-project';
import { RealIP } from 'nestjs-real-ip';
import { GetProjectDto } from './../project/dto/get-project.dto';
import { ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Param,
  Query,
  Request
} from '@nestjs/common';
import { ProjectService } from './project.service';




@ApiTags('User Projects')
@Controller('user/projects')
export class ProjectUserController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  findAll(@Query() getProjectDto: GetProjectDto) {
    return this.projectService.findAll(getProjectDto);
  }

  @Get('/nearby')
  findAllByRadius(
    @Request() req,
    @Query()
    getLocationProjectDto: GetLocationProjectDto
  ) {

    const ip = req.clientIp;
    getLocationProjectDto.ip_address = ip
    return this.projectService.findAllByRadius(
      getLocationProjectDto
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(id, []);
  }
}
