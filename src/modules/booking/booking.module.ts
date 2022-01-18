import { BookingUserController } from './booking.user.controller';
import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingAdminController } from './booking.admin.controller';

@Module({
  controllers: [BookingAdminController, BookingUserController],
  providers: [BookingService]
})
export class BookingModule {}
