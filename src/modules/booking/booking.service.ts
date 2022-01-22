import { Injectable } from '@nestjs/common';
import { BookingStatus, ViewType } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { CreateBookingDto } from './dto/create-booking.dto';
import { GetBookingDto } from './dto/get-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingService {
    constructor(
    private prisma: PrismaService,
  ) {}

  // USE CASE: As an admin, I can create a booking
  create(createBookingDto: CreateBookingDto) {
    const {
      name,
      reference_no,
      description,
      cancelled_description,
      start_datetime,
      duration_minute,
      discount,
      booking_status,
      booking_view_type,
      payment_type,
      info_color,
      max_attendees,
      event_id,
      project_id,
    } = createBookingDto;

    return this.prisma.booking.create({
      data: {
        name,
        reference_no,
        description,
        cancelled_description,
        start_datetime,
        duration_minute,
        discount,
        booking_status,
        booking_view_type,
        payment_type,
        info_color,
        max_attendees,
        event: {
          connect: {id : event_id }
        },
        project: {
          connect: { id: project_id },
        }
      },
    });
  }

  async findAll(getBookingDto: GetBookingDto) {
    const {
      project_id,
      booking_status,
      booking_view_type,
      search,
      start_datetime,
      end_datetime,
      event_id,
    } = getBookingDto;
    
    return await this.prisma.booking.findMany({
      where: {
          name: {
              search: search || undefined,
          },
          description: {
            search: search || undefined,
          },
          project_id,
          booking_status,
          booking_view_type,
          start_datetime: {
            gte: start_datetime || undefined, 
          },       
          event_id: event_id || undefined
      },
    });
  }

  findOne(id: string) {
    return this.prisma.booking.findUnique({
      where: { id },
      include: { 
        event: true,
        booking_images: true,
        booking_attachments: true,
        user_booking_attendences: true,
        posts: true
       }
    });
  }

  update(id: string, updateBookingDto: UpdateBookingDto) {
      const {
        name,
        reference_no,
        description,
        cancelled_description,
        start_datetime,
        duration_minute,
        discount,
        booking_status,
        booking_view_type,
        payment_type,
        info_color,
        max_attendees,
        event_id,
        project_id,
      } = updateBookingDto;

      return this.prisma.booking.update({
        where: { id },
        data: {
          name,
          reference_no,
          description,
          cancelled_description,
          start_datetime,
          duration_minute,
          discount,
          booking_status,
          booking_view_type,
          payment_type,
          info_color,
          max_attendees,
          event: {
            connect: { id: event_id },
          },
          project: {
            connect: { id: project_id },
          },
        },
      });;
  }

  remove(id: string) {
    return this.prisma.booking.delete({
      where: { id }
    });
  }
}
