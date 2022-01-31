import { Injectable } from '@nestjs/common';
import { BookingStatus, prisma, Prisma, ViewType } from '@prisma/client';
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

    let booking = this.prisma.booking.create({
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
        event: event_id ? {
           connect: {id : event_id }
        }: undefined,
        project: {
          connect: { id: project_id },
        }
      },
    });

    return booking
  }

  async createMany(createBookingDto: CreateBookingDto) {
    this.prisma.booking.createMany({
      data: [
        
      ]
    })
  }

  async findAll(getBookingDto: GetBookingDto) {
    const {
      orderBy,
      project_id,
      booking_status,
      booking_view_type,
      search,
      start_datetime,
      end_datetime,
      event_id,
      page,
      limit
    } = getBookingDto;

    const currentPage = page || 1;
    const listPerPage = limit || 20;
    const offset = (currentPage - 1) * listPerPage;
    
    return await this.prisma.booking.findMany({
      skip: offset,
      take: listPerPage,
      orderBy: orderBy ? [{ ...orderBy }] : undefined,
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
            lte: end_datetime || undefined
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
          event: event_id ? {
            connect: {id : event_id }
          }: undefined,
        },
      });;
  }

  remove(id: string) {
    return this.prisma.booking.delete({
      where: { id }
    });
  }
}
