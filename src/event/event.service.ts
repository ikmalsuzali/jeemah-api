import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventService {
  constructor(
    private prisma: PrismaService
  ) {}

  create(createEventDto: CreateEventDto) {
    const {name, description, minute_duration, event_rate_id, project_id} = createEventDto
    return this.prisma.event.create({
      data: {
       name,
       description,
       minute_duration,
       event_rate: {
         connect: {id: event_rate_id}
       },
       project: {
         connect: {id: project_id}
       }
      }
    });
  }

  findAll() {
    return `This action returns all event`;
  }

  findOne(id: string) {
    return this.prisma.event.findUnique({
      where: { id }
    });
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return this.prisma.event.update({
      where: { id },
      data: {
        ...updateEventDto
      }
    });
  }

  remove(id: string) {
    return this.prisma.event.delete({
      where: { id }
    });
  }
}
