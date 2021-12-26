import { ObjectType } from '@nestjs/graphql';
import { User } from './user.model';
import { BaseModel } from './base.model';
import { Project } from './project.model';

@ObjectType()
export class AdminProject extends BaseModel {
  user: User;
  project: Project;
}
