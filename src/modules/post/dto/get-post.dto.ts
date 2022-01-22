import { ApiProperty, PartialType } from '@nestjs/swagger';
import { ViewType } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PaginationArgs } from 'src/common/pagination/pagination.dto';
import { PostBaseCategory } from '../../../models/post.model';
export class GetPostDto extends PartialType(PaginationArgs) {
  @ApiProperty()
  @IsString()
  project_id?: string;

  @ApiProperty({enum: PostBaseCategory})
  @IsEnum(PostBaseCategory)
  post_base_category: PostBaseCategory;

  @ApiProperty({enum: ViewType})
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
  @IsOptional()
  search?: string;
}