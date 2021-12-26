import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';

@ObjectType()
export class Country extends BaseModel {
  name: string;
}
