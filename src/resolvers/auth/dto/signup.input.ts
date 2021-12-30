import { Role } from './../../../models/user.model';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SignupInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  phone_number: string;

  @Field()
  role: Role;
}
