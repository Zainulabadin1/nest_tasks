import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAdminInput } from './dto/create-admin.input';
import { UpdateAdminInput } from './dto/update-admin.input';
import {Model, Types} from 'mongoose';
import {Admin} from './admin.schema';
import { Product, ProductSchema } from 'src/user/product.schema';
import { UpdateProductInput } from './dto/update-product.input';
import { ApproveProductInput } from './dto/approve-product.input';
import { ObjectId, ObjectIdLike } from 'bson';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private readonly adminModel: Model<Admin>,
    @InjectModel(Product.name) private readonly productModel: Model<Product>
    ) {}


  async create(createAdmin: CreateAdminInput) :Promise <Admin> {
    const admin = await new this.adminModel(createAdmin);
    return admin.save();
  }

  async unapprovedProducts() {
    return await this.productModel.find({approved: "unapproved"});
  }


  async updateProductPrice( updatePrice : UpdateProductInput){
    const product = await this.productModel.findOne(new Types.ObjectId(updatePrice._id));
    console.log(" Product is : " , product)
    product.price = updatePrice.price;
    return product.save();
  }

  
  async approve_products(ids){
    
    const productForApproval = await this.productModel.find({_id : ids})
    

      for( let i = 0 ; i<productForApproval.length ; i++)
      {
        console.log("products are  : " , productForApproval[i].approved)  
        productForApproval[i].approved = "approved";

        console.log("after approval  : " ,  productForApproval[i].approved )
        productForApproval[i].save();
      }
      
     return productForApproval;
  }

  findAll() {
    return `This action returns all admin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminInput: UpdateAdminInput) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
