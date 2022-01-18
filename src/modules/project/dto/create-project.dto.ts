import { CreateAddressDto } from '../../address/dto/create-address.dto';
import { IsString, IsOptional, IsPhoneNumber, IsNotEmpty, IsEmail, IsObject, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateProjectDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  registration_no?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsPhoneNumber()
  @IsOptional()
  phone_number?: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @ValidateNested()
  address: CreateAddressDto
}
