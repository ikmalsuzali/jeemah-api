import { FilterStateDto } from './dto/filter-state.dto';
import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StateService {
  constructor(private prisma: PrismaService) {}

  async getAllStates(filterStateDto: FilterStateDto) {
    let query: any = {
      where: {
        country: {
          is: {
            id: filterStateDto.country_id || undefined,
          },
        },
      },
      include: {
        cities: true,
      },
    };
    return await this.prisma.state.findMany(query);
  }
}
