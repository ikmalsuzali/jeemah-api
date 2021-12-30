import { IsEmail } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field()
  first_name: string;
  @Field()
  last_name: string;
  @Field()
  @IsEmail()
  email: string;
  @Field()
  phone_number: string;
}
