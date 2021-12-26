import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';
import { Post } from './post.model';

@ObjectType()
export class PostCategory extends BaseModel {
  name: string;
  description?: string;
  post: Post;
}
