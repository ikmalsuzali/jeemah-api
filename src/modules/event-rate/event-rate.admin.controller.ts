import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EventRateService } from './event-rate.service';
import { CreateEventRateDto } from './dto/create-event-rate.dto';
import { UpdateEventRateDto } from './dto/update-event-rate.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetEventRateDto } from './dto/get-event-rate.dto';

@ApiTags('Admin Event Rate')
@Controller('admin/event-rate')
export class EventRateAdminController {
  constructor(private readonly eventRateService: EventRateService) {}

  @Post()
  @ApiOperation({ summary: 'AS A ADMIN, I CAN CREATE AN EVENT RATE' })
  create(@Body() createEventRateDto: CreateEventRateDto) {
    return this.eventRateService.create(createEventRateDto);
  }

  @Get()
  @ApiOperation({ summary: 'AS A ADMIN, I CAN FIND ALL AN EVENT RATE' })
  findAll(@Query() getEventRateDto: GetEventRateDto) {
    return this.eventRateService.findAll(getEventRateDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'AS A ADMIN, I CAN FIND ONE EVENT RATE' })
  findOne(@Param('id') id: string) {
    return this.eventRateService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'AS A ADMIN, I CAN UPDATE ALL EVENT RATE' })
  update(
    @Param('id') id: string,
    @Body() updateEventRateDto: UpdateEventRateDto
  ) {
    return this.eventRateService.update(id, updateEventRateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'AS A ADMIN, I CAN REMOVE AN EVENT RATE' })
  remove(@Param('id') id: string) {
    return this.eventRateService.remove(id);
  }
}
