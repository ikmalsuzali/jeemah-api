import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetBookingDto } from './dto/get-booking.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@ApiTags('User Booking')
@Controller('user/bookings')
export class BookingUserController {
  constructor(private readonly bookingService: BookingService) {}

  // @Post()
  // @ApiOperation({ summary: 'AS A USERR, I CAN SEE EVENT DETAILS' })
  // create(@Body() createBookingDto: CreateBookingDto) {
  //   return this.bookingService.create(createBookingDto);
  // }

  @Get()
  @ApiOperation({ summary: 'AS A USER, I CAN SEE BOOKINGS' })
  findAll(@Query() getBookingDto: GetBookingDto) {
    return this.bookingService.findAll(getBookingDto);
  }

  @Get(':id')
  @ApiOperation({summary: 'AS A USER, I CAN VIEW BOOKING DETAILS'})
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
  //   return this.bookingService.update(id, updateBookingDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.bookingService.remove(id);
  // }
}
