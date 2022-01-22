import { InputType, Int, Field } from '@nestjs/graphql';
import { } from 'class-validator';



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

    @Field()
    user_id: string

}


