import { City } from './../city/entities/city.model';
import { State } from './state.model';
import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';

@ObjectType()
export class Country extends BaseModel {
  name: string;
  states: State[];
  cities: City[];
}
