import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AdminDto{
    @Field()
    name: string

    @Field()
    email: string

    @Field()
    password: string
    
}