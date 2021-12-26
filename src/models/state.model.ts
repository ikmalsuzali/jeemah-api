import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';
import { City } from './city.model';

@ObjectType()
export class State extends BaseModel {
  name: string;
  city: City;
}
