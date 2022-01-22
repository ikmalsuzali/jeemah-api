import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CountryService } from './country.service';
import { GetCountryDto } from './dto/get-country.dto';

@ApiTags('Locality: Country')
@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  @ApiOperation({ summary: 'AS A USER, I CAN FIND ALL COUNTRIES' })
  getCountries(@Query() getCountryDto: GetCountryDto){
    return this.countryService.getAllCountries(getCountryDto);
  }

}
