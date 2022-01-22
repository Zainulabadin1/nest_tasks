import { InputType, Int, Field } from '@nestjs/graphql';



@InputType()
export class ShowDataInput {
 
 @Field()
 _id: string

 @Field()
 choice: string
 

}