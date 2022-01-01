import { BaseModel } from 'src/models/base.model';
import { City } from './../../city/entities/city.model';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class State extends BaseModel {
  name: string;
  cities: City[];
}
