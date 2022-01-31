import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetEventDto } from './dto/get-event.dto';

@ApiTags('Admin Events')
@Controller('admin/events')
export class EventAdminController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @ApiOperation({ summary: 'AS AN ADMIN, I CAN CREATE A EVENT' })
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

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

  @Patch(':id')
  @ApiOperation({ summary: 'AS AN ADMIN, I CAN UPDATE EVENT DETAILS' })
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(id, updateEventDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'AS AN ADMIN, I CAN REMOVE EVENT DETAILS' })
  remove(@Param('id') id: string) {
    return this.eventService.remove(id);
  }
}
