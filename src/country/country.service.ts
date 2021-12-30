import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}

  async getAllCountries() {
    return await this.prisma.country.findMany({
      include: {
        states: {
          include: {
            cities: true
          }
        }
      }
    });
  }

}
