import { ObjectType } from '@nestjs/graphql';
import { User } from './user.model';
import { BaseModel } from './base.model';
import { PostCategory } from './post-category.model';
import { Project } from './project.model';

@ObjectType()
export class Post extends BaseModel {
  name: string;
  description?: string;
  postCategory: PostCategory;
  startDate: Date;
  endDate: Date;
  User: User;
  Project: Project;
}
