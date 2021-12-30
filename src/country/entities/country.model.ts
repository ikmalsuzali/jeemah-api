import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/models/base.model';

@ObjectType()
export class Country extends BaseModel {
  name: string;
}
