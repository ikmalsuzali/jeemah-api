import { PaginationArgs } from './../../../common/pagination/pagination.dto';
import { IsOptional, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
export class GetProjectDto extends PartialType(PaginationArgs) {
  @ApiProperty()
  @IsString()
  @IsOptional()
  search?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  city_id?: string;
}