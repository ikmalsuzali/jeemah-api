import { PartialType } from '@nestjs/swagger';
import { ViewType } from '@prisma/client';
import { PaginationArgs } from 'src/common/pagination/pagination.dto';
import { PostBaseCategory } from '../../../models/post.model';
export class GetPostDto extends PartialType(PaginationArgs) {
  project_id: string;
  post_base_category: PostBaseCategory;
  post_view_type: ViewType;
  post_category_id?: string;
  start_date?: Date;
  end_date?: Date;
  search?: string;
}