import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetEventDto } from './dto/get-event.dto';

@ApiTags('User Events')
@Controller('user/events')
export class EventUserController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  @ApiOperation({ summary: 'AS AN ADMIN, I CAN FIND EVENTS' })
  findAll(@Query() getEventDto: GetEventDto) {
    return this.eventService.findAll(getEventDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'AS AN ADMIN, I CAN SEE EVENT DETAILS' })
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(id);
  }
}
