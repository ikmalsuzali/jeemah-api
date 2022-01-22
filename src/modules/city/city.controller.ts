import { GetCityDto } from './dto/get-city.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CityService } from './city.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Locality: City')
@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  @ApiOperation({ summary: 'AS A USER, I CAN FIND ALL CITY'})
  getCities(@Query() getCityDto: GetCityDto) {
    return this.cityService.getAllCities(getCityDto);
  }
}
