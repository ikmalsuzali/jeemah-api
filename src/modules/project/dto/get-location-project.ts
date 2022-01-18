import { PaginationArgs } from './../../../common/pagination/pagination.dto';
import { IsBoolean, IsOptional, IsLatitude, IsLongitude, IsBooleanString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
export class GetLocationProjectDto extends PartialType(PaginationArgs) {
  @ApiProperty()
  @IsOptional()
  ip_address?: string;

  @ApiProperty()
  @IsOptional()
  radius: number;

  @ApiProperty()
  @IsBooleanString()
  is_metric: boolean;

  @ApiProperty()
  @IsLongitude()
  longitude: number;

  @ApiProperty()
  @IsLatitude()
  latitude: number;
}
