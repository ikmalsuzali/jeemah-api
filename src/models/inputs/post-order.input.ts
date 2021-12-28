import { InputType, registerEnumType } from '@nestjs/graphql';
import { Order } from '../../common/order/order';

export enum PostOrderField {
  id = 'id',
  startDate = 'start_date',
  createdAt = 'created_at',
  updatedAt = 'updated_at',
  postCategory = 'post_category',
  name = 'name',
}

registerEnumType(PostOrderField, {
  name: 'PostOrderField',
  description: 'Properties by which post connections can be ordered.',
});

@InputType()
export class PostOrder extends Order {
  field: PostOrderField;
}
