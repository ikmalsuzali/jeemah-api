
import { PostBaseCategory, ViewType } from '@prisma/client';



export class CreatePostDto {
  name: string;
  description?: string;
  post_base_category?: PostBaseCategory;
  post_view_type: ViewType;
  post_category_id?: string;
  start_date?: Date;
  end_date?: Date;
  post_images: string[];
  post_attachments: string[];
  project_id: string;
  // Booking exta params
  is_booking?: Boolean;
  max_attendees?: Number;
}
