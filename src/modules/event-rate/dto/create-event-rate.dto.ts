import { EventRateType } from '@prisma/client';
import { IsEnum, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEventRateDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional() 
  description?: string;
  
  @ApiProperty()
  @Min(1)
  @IsNumber()
  rate_amount: number;
  
  @ApiProperty({enum: EventRateType})
  @IsEnum(EventRateType)
  event_rate_type: EventRateType;

  @ApiProperty()
  @IsString()
  project_id: string;
}
