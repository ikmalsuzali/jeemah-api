import { ObjectType, registerEnumType } from '@nestjs/graphql';
import { User } from './user.model';
import { BaseModel } from './base.model';
import { PostCategory } from './post-category.model';
import { Project } from './project.model';

export enum PostViewType {
  FOLLOWERS = 'FOLLOWERS',
  INTERNAL = 'INTERNAL',
  ALL = 'ALL'
}

registerEnumType(PostViewType, {
  name: 'PostViewType',
});

export enum PostBaseCategory {
  EVENT = 'EVENT',
  USEFUL_CONTACT_NO = 'USEFUL_CONTACT_NO',
  LINKS = 'LINKS'
}

registerEnumType(PostBaseCategory, {
  name: 'PostBaseCategory',
});
@ObjectType()
export class Post extends BaseModel {
  name: string;
  description?: string;
  postViewType: PostViewType;
  postBaseCategory?: PostBaseCategory;
  postCategory: PostCategory;
  startDate: Date;
  endDate: Date;
  User: User;
  Project: Project;
}
