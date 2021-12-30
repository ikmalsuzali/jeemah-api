import { Field, ObjectType, ID, HideField } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export abstract class BaseModel {
  @Field(() => ID)
  id: string;
  @Field({
    description: 'Identifies the date and time when the object was created.',
  })
  created_at: Date;
  @Field({
    description:
      'Identifies the date and time when the object was last updated.',
  })
  updated_at: Date;
  @Field({
    description: 'Identifies the user id who created.',
  })
  created_by: string;
  @Field({
    description: 'Identifies the user id who updated.',
  })

  updated_by: string;
}
