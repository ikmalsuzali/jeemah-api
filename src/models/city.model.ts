import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';
import { Address } from './address.model';
import { State } from './state.model';
import { Country } from './country.model';

@ObjectType()
export class City extends BaseModel {
  name: string;
  state: State;
  country: Country;
  addresses: Address[];
 
}
