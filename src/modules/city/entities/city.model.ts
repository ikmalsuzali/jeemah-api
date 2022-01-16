import { State } from '../../state/entities/state.entity';
import { Address } from '../../../models/address.model';
import { BaseModel } from 'src/models/base.model';
// import { Country } from '../../country/entities/country.model';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class City extends BaseModel {
  name: string;
  state: State;
  // country: Country;
  addresses: Address[];
}
