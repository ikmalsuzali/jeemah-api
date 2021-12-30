import { FilterCityDto } from './dto/filter-city.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}

  async getAllCities(filterCityDto: FilterCityDto) {
    let query: any = {
      where: {},
      include: {
        country: true,
        state: true,
      },
    };
    if (filterCityDto.country_id) query.where.country_id = filterCityDto.country_id;
    if (filterCityDto.state_id) query.where.state_id = filterCityDto.state_id;
    return await this.prisma.city.findMany(query);
  }

}
