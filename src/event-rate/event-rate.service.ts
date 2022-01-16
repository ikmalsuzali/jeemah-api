import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { CreateEventRateDto } from './dto/create-event-rate.dto';
import { UpdateEventRateDto } from './dto/update-event-rate.dto';

@Injectable()
export class EventRateService {
  constructor(
    private prisma: PrismaService
  ){}

  create(createEventRateDto: CreateEventRateDto) {
    const { name, description, rate_amount, event_id, event_rate_type, project_id } = createEventRateDto
    return this.prisma.eventRate.create({
      data: {
        name,
        description,
        rate_amount,
        event_rate_type,
        project: {
          connect: {id: project_id}
        },
        event: {
          connect: {id: event_id}
        }
      }
    });
  }

  findAll(project_id: string, event_id?: string) {
    return this.prisma.eventRate.findMany({
      where: {
        project_id,
        event_id: event_id || undefined,
      },
      include: { event: true },
    });
  }

  findOne(id: string) {
    return this.prisma.eventRate.findUnique({
      where: {id},
      include: { event: true}
    });
  }

  update(id: string, updateEventRateDto: UpdateEventRateDto) {
        const {
          name,
          description,
          rate_amount,
          event_id,
          event_rate_type,
          project_id,
        } = updateEventRateDto;

    return this.prisma.eventRate.update({
      where: { id },
      data: {
        name,
        description,
        rate_amount,
        event_rate_type,
        project: {
          connect: { id: project_id },
        },
        event: {
          connect: { id: event_id },
        },
      },
    });
  }

  remove(id: string) {
    return this.prisma.eventRate.delete({
      where: { id }
    });
  }
}
