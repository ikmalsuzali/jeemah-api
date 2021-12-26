import { ObjectType } from '@nestjs/graphql';
import { User } from './user.model';
import { BaseModel } from './base.model';

@ObjectType()
export class Address extends BaseModel {
  address: string;
  postcode?: string;
  city: City
  longitude: any;
  latitude: any;
  user: User;
  company: Company;
  project: Project;
}
