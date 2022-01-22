import { InputType, Int, Field } from '@nestjs/graphql';
import { } from 'class-validator';



@InputType()
export class CreateAdminInput {
 
  @Field()
    name: string

    @Field()
    email: string

    @Field()
    password: string

}