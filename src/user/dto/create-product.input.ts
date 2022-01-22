import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { } from 'class-validator';
import { ObjectId } from 'mongoose';



@InputType()
export class CreateProductInput {
 
     @Field()
    name: string

    @Field()
    price: number

    @Field()
    product_code: string

    @Field()
    quantity: number

    @Field()
    expiry_date: Date

    @Field(() => ID)
    user_id: ObjectId

}


