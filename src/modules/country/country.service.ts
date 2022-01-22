import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { GetCountryDto } from './dto/get-country.dto';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}

  async getAllCountries(getCountryDto: GetCountryDto) {
    const { country_id, state_id, city_id } = getCountryDto 
    let query: any = {
      where: {
        country_id,
        state_id,
        city_id
      },
      include: {
        states: {
          include: {
            cities: true,
          },
        },
      }
    };
    return await this.prisma.country.findMany(query);
  }
}
