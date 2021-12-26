import { ObjectType, registerEnumType, HideField } from '@nestjs/graphql';
import { Post } from './post.model';
import { BaseModel } from './base.model';
import { Address } from './address.model';
import { AdminProject } from './admin-project.model';
import { UserProjectFollower } from './user-project-follower.model';

export enum Role {
  SUPERADMIN = 'SUPERADMIN',
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}


registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User extends BaseModel {
  email: string;
  @HideField()
  password: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  status: UserStatus;
  address: Address;
  role: Role;
  loginAttempt: number;
  posts: Post[];
  userProjectFollowers: UserProjectFollower[];
  adminProjects: AdminProject[];
}
