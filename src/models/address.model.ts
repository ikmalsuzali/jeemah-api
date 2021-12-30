import { City } from './../city/entities/city.model';
import { Project } from './project.model';
import { Company } from './company.model';
import { ObjectType } from '@nestjs/graphql';
import { User } from './user.model';
import { BaseModel } from './base.model';

@ObjectType()
export class Address extends BaseModel {
  address: string;
  postcode?: string;
  city: City
  longitude: number;
  latitude: number;
  user: User;
  company: Company;
  project: Project;
}
