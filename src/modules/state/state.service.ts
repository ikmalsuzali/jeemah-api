import { GetStateDto } from './dto/get-state.dto';
import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StateService {
  constructor(private prisma: PrismaService) {}

  async getAllStates(getStateDto: GetStateDto) {
    let query: any = {
      where: {
        country: {
          is: {
            id: getStateDto.country_id || undefined,
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
