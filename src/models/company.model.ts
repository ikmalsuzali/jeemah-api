import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';
import { Address } from './address.model';

@ObjectType()
export class Company extends BaseModel {
  name: string;
  registrationNo?: string;
  phoneNumber?: string;
  email: string;
  description?: string;
  address?: Address;
}
