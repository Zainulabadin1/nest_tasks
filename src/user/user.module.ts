import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import {User, UserSchema} from './user.schema';
import { Product,ProductSchema } from './product.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([
    {name : User.name , schema : UserSchema}
  ]),
  MongooseModule.forFeature([
    {name : Product.name , schema : ProductSchema}
  ])
],

  providers: [UserResolver, UserService]
})
export class UserModule {}
