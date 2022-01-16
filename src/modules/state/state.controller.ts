import { FilterStateDto } from './dto/filter-state.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { StateService } from './state.service';

@Controller('states')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  getStates(@Query() filterStateDto: FilterStateDto) {
    return this.stateService.getAllStates(filterStateDto);
  }
}
