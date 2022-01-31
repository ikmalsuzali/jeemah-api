import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationArgs {
  // @ApiProperty()
  // @IsOptional()
  // skip?: number;

  // @ApiProperty()
  // @IsOptional()
  // after?: string;

  // @ApiProperty()
  // @IsOptional()
  // before?: string;

  // @ApiProperty()
  // @IsOptional()
  // first?: number;
  
  // @ApiProperty()
  // @IsOptional()
  // last?: number;

  @ApiProperty()
  @IsOptional()
  orderBy?: object

  @ApiProperty()
  @IsOptional()
  page?: number

  @ApiProperty()
  @IsOptional()
  limit?: number
}
