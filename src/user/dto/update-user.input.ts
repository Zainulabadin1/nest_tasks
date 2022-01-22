import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  _id: string;

 @Field()
 firstName: string

 @Field()
 lastName: string

 @Field()
 dob: Date

 @Field()
 age: number

 @Field()
 status: string

 @Field()
 email: string

 @Field()
 password: string

 @Field()
 is_block: boolean

 @Field()
 gender: string

 @Field()
 nationality: string
}
