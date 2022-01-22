import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';
export class GetCountryDto {
  @ApiProperty()
  @IsOptional()
  country_id?: string;

  @ApiProperty()
  @IsOptional()
  state_id?: string;

  @ApiProperty()
  @IsOptional()
  city_id?: string;
}
