import { InputType, Int, Field } from '@nestjs/graphql';



@InputType()
export class CreateUserInput {
 
 @Field()
 firstName: string

 @Field()
 lastName: string

 @Field()
 dob: Date

 @Field()
 email: string

 @Field()
 password: string

}