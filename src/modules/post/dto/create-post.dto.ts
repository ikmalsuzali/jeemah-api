
import { ApiProperty } from '@nestjs/swagger';
import { PostBaseCategory, ViewType } from '@prisma/client';
import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreatePostDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  description?: string;

 @ApiProperty({ enum: PostBaseCategory})
 @IsOptional()
 post_base_category?: PostBaseCategory;
  
  @ApiProperty({ enum: ViewType })
  @IsEnum(ViewType)
  post_view_type: ViewType;

  @ApiProperty()
  @IsOptional()
  post_category_id?: string;

  @ApiProperty()
  @IsOptional()
  start_date?: Date;

  @ApiProperty()
  @IsOptional()
  end_date?: Date;

  @ApiProperty()
  @IsArray()
  post_images: string[];

  @ApiProperty()
  @IsArray()
  post_attachments: string[];

  @ApiProperty()
  @IsOptional()
  booking_id?: string;

  @ApiProperty()
  @IsString()
  project_id: string;
  // Booking exta params

  @ApiProperty()
  @IsBoolean()
  is_booking?: boolean;

  @ApiProperty()
  @IsNumber()
  max_attendees?: number;
}
