import { ObjectType } from '@nestjs/graphql';
import { User } from './user.model';
import { BaseModel } from './base.model';
import { PostCategory } from './post-category.model';
import { Project } from './project.model';

export enum PostViewType {
  FOLLOWERS = 'FOLLOWERS',
  INTERNAL = 'INTERNAL',
  ALL = 'ALL'
}

export enum PostBaseCategory {
  EVENT = 'EVENT',
  USEFUL_CONTACT_NO = 'USEFUL_CONTACT_NO',
  LINKS = 'LINKS'
}
@ObjectType()
export class Post extends BaseModel {
  name: string;
  description?: string;
  postViewType: PostViewType
  postBaseCategory?: PostViewType;
  postCategory: PostCategory;
  startDate: Date;
  endDate: Date;
  User: User;
  Project: Project;
}
