import { InputType, Int, Field } from '@nestjs/graphql';



@InputType()
export class ShowDataInput {
 
 @Field()
 _id: string

 @Field()
 choice: string

 @Field({nullable:true})
 price: number
 
 @Field({nullable:true})
 created_time: Date

}