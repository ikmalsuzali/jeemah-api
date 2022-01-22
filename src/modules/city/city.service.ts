import { GetCityDto } from './dto/get-city.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}

  async getAllCities(getCityDto: GetCityDto) {
    const {country_id, state_id} = getCityDto
    let query: any = {
      where: {
        country_id,
        state_id
      },
      include: {
        country: true,
        state: true,
      },
    };
  
    return await this.prisma.city.findMany(query);
  }

}
