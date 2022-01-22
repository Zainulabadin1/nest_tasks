import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, AdminSchema } from './admin.schema';
import { Product, ProductSchema } from 'src/user/product.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {name : Admin.name , schema : AdminSchema}]),
    MongooseModule.forFeature([
      {name : Product.name , schema : ProductSchema}])
  ],
  providers: [AdminResolver, AdminService]
})
export class AdminModule {}
