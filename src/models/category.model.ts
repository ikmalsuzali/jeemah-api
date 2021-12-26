import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';

@ObjectType()
export class Category extends BaseModel {
  name: string;
}
