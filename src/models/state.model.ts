import { City } from './../city/entities/city.model';
import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';

@ObjectType()
export class State extends BaseModel {
  name: string;
  cities: City[];
}
