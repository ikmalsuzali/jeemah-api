import { FilterCountryDto } from './dto/filter-country.dto';
import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}

  async getAllCountries() {
    let query: any = {
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
