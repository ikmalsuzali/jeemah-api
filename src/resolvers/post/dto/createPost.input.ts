import { PostBaseCategory, PostViewType } from './../../../models/post.model';
import { IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';


@InputType()
export class CreatePostInput {
  @Field()
  @IsNotEmpty()
  name: string;
  @Field()
  description: string;
  @Field()
  post_view_type: PostViewType;
  @Field()
  post_base_category: PostBaseCategory;
  @Field()
  post_category_id: string;
  @Field()
  start_date: Date;
  @Field()
  end_date: Date;
  @Field()
  @IsNotEmpty()
  title: string;
}
