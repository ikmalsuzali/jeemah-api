import { IsString, IsOptional, IsDateString, IsNumber, IsEnum, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BookingStatus, PaymentType, ViewType } from "@prisma/client"

export class CreateBookingDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  reference_no?: string;

  @ApiProperty()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsOptional()
  cancelled_description?: string;

  @ApiProperty()
  @IsDateString()
  start_datetime: Date;

  @ApiProperty()
  @IsNumber()
  duration_minute: number;
  discount: number;

  @ApiProperty()
  @IsEnum(BookingStatus)
  booking_status: BookingStatus;

  @ApiProperty()
  @IsEnum(ViewType)
  booking_view_type: ViewType;

  @ApiProperty()
  @IsOptional()
  payment_type?: PaymentType;

  @ApiProperty()
  @IsOptional()
  info_color?: string;

  @ApiProperty()
  @IsNumber()
  max_attendees: number;

  @ApiProperty()
  @IsOptional()
  event_id?: string;

  @ApiProperty()
  @IsString()
  project_id: string;

  @ApiProperty()
  @IsArray()
  booking_images: string[];

  @ApiProperty()
  @IsArray()
  booking_attachments: string[];

  @ApiProperty()
  @IsString()
  user_booking_attendences: string[];
}
