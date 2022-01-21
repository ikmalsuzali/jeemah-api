import { ApiProperty } from '@nestjs/swagger';
import { IsString, isDecimal, IsOptional, IsLongitude, IsNotEmpty, IsLatitude } from 'class-validator'
export class CreateAddressDto {

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  postcode?: string;

  @ApiProperty()
  @IsString()
  city_id: string;

  @ApiProperty()
  @IsLongitude()
  @IsOptional()
  longitude?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsLatitude()
  @IsOptional()
  latitude?: number;
  
  @ApiProperty()
  @IsOptional()
  project_id?: string;
}
