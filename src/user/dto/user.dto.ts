import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserDto{
    @Field()
     _id: string;
  
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