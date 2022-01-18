import { ApiProperty } from '@nestjs/swagger';
import { PaginationArgs } from './../../../common/pagination/pagination.dto';
import { PartialType } from '@nestjs/swagger';
import { BookingStatus, ViewType } from '@prisma/client';
import { IsString, IsEnum, IsDateString, IsOptional } from 'class-validator';

export class GetBookingDto extends PartialType(PaginationArgs) {
  @ApiProperty()
  @IsString()
  project_id: string;

  @ApiProperty({enum: BookingStatus})
  @IsEnum(BookingStatus)
  booking_status: BookingStatus;

  @ApiProperty({enum: ViewType})
  @IsEnum(ViewType)
  booking_view_type: ViewType;

  @ApiProperty()
  @IsOptional()
  search?: string;

  @ApiProperty()
  @IsOptional()
  start_datetime?: Date;

  @ApiProperty()
  @IsOptional()
  end_datetime?: Date;

  @ApiProperty()
  @IsOptional()
  event_id?: string;
}