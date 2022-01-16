import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EventRateService } from './event-rate.service';
import { CreateEventRateDto } from './dto/create-event-rate.dto';
import { UpdateEventRateDto } from './dto/update-event-rate.dto';

@Controller('event-rate')
export class EventRateController {
  constructor(private readonly eventRateService: EventRateService) {}

  @Post()
  create(@Body() createEventRateDto: CreateEventRateDto) {
    return this.eventRateService.create(createEventRateDto);
  }

  @Get()
  findAll(@Query() project_id: string, event_id?: string) {
    return this.eventRateService.findAll(project_id, event_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventRateService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEventRateDto: UpdateEventRateDto
  ) {
    return this.eventRateService.update(id, updateEventRateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventRateService.remove(id);
  }
}
