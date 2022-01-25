import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ProductDto{
    @Field()
    _id : string

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

    @Field({nullable:true})
    created_time: Date
}