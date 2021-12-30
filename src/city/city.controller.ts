import { FilterCityDto } from './dto/filter-city.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CityService } from './city.service';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  getCities(@Query() filterCityDto: FilterCityDto) {
    return this.cityService.getAllCities(filterCityDto);
  }
}
