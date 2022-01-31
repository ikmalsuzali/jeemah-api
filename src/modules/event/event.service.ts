import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { GetEventDto } from './dto/get-event.dto';

@Injectable()
export class EventService {
  constructor(
    private prisma: PrismaService
  ) {}

  async create(createEventDto: CreateEventDto) {
    const {name, description, minute_duration, event_rate_id, project_id} = createEventDto
    return await this.prisma.event.create({
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

  async findAll(getEventDto: GetEventDto) {
    const { search, event_rate_id, project_id } = getEventDto 
    return await this.prisma.event.findMany({
      where: {
        name: {
          search
        },
        event_rate_id,
        project_id
      }
    })
  }

  async findOne(id: string) {
    return await this.prisma.event.findUnique({
      where: { id }
    });
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    const {name, description, minute_duration, event_rate_id, project_id} = updateEventDto
    return await this.prisma.event.update({
      where: { id },
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

  async remove(id: string) {
    return await this.prisma.event.delete({
      where: { id }
    });
  }
}
