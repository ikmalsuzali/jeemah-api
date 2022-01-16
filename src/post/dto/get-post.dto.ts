import { ViewType } from '@prisma/client';
import { PostBaseCategory } from './../../models/post.model';
export class GetPostDto {
    project_id: string
    post_base_category: PostBaseCategory
    post_view_type: ViewType
    post_category_id?: string
    start_date?: Date
    end_date?: Date
    search?: string
}