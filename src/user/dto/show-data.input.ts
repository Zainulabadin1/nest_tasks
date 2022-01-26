import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';



@InputType()
export class ShowDataInput {
 
 @Field(()=>ID)
 _id:  ObjectId

 @Field()
 choice: string

 @Field({nullable:true})
 price: number
 
 @Field({nullable:true})
 created_time: Date

}