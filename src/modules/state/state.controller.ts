import { GetStateDto } from './dto/get-state.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { StateService } from './state.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Locality: States')
@Controller('states')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  @ApiOperation({ summary: 'AS A USER, I CAN FIND ALL STATES' })
  getStates(@Query() getStateDto: GetStateDto) {
    return this.stateService.getAllStates(getStateDto);
  }
}
