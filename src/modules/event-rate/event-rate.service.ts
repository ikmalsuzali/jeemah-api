import { PrismaService } from 'nestjs-prisma';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEventRateDto } from './dto/create-event-rate.dto';
import { UpdateEventRateDto } from './dto/update-event-rate.dto';
import { GetEventRateDto } from './dto/get-event-rate.dto';

@Injectable()
export class EventRateService {
  constructor(
    private prisma: PrismaService
  ){}

  async create(createEventRateDto: CreateEventRateDto) {
    const { name, description, rate_amount, event_rate_type, project_id } = createEventRateDto
    const findName = await this.prisma.eventRate.findFirst({
      where: {
        name,
        project_id
      }
    })
    if (findName) { throw new HttpException('Name exists', HttpStatus.BAD_REQUEST) }

    return await this.prisma.eventRate.create({
      data: {
        name,
        description,
        rate_amount,
        event_rate_type,
        project: {
          connect: {id: project_id}
        }
      }
    });
  }

  async findAll(getEventRateDto: GetEventRateDto) {
    const { search, rate_amount_min, rate_amount_max, event_rate_type, event_id, project_id} =  getEventRateDto
    return await this.prisma.eventRate.findMany({
      where: {
        name: {
          search: search
        },
        description: {
            search: search
        },
        rate_amount: {
          gte:  +rate_amount_min || undefined,
          lte: +rate_amount_max || undefined
        },
        event_rate_type: event_rate_type || undefined,
        project_id,
      },
      include: { events: true },
    });
  }

  async findOne(id: string) {
    return await this.prisma.eventRate.findUnique({
      where: {id},
      include: { events: true}
    });
  }

  async update(id: string, updateEventRateDto: UpdateEventRateDto) {
        const {
          name,
          description,
          rate_amount,
          event_rate_type,
          project_id,
        } = updateEventRateDto;

    return await this.prisma.eventRate.update({
      where: { id },
      data: {
        name,
        description,
        rate_amount,
        event_rate_type
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.eventRate.delete({
      where: { id }
    });
  }
}
