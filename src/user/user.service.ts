import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateProductInput } from './dto/create-product.input';
import {Model} from 'mongoose';
import {User} from './user.schema';
import { Product } from './product.schema';
import { ShowDataInput } from './dto/show-data.input';


@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Product.name) private readonly productModel: Model<Product>
    ) {}


  async create(createUser: CreateUserInput) : Promise <User>{
   const user =await new this.userModel(createUser);
   return user.save();  
  }

  async createProduct( createProduct: CreateProductInput) : Promise <Product>{
    const product = await new this.productModel(createProduct);
    return product.save();
  }
  
  
  async findAll(input: ShowDataInput) : Promise<Product[]> {
    //const usersearch = await this.productModel.findById({user_id : input._id});
    if(input.choice === 'personal')
    {
    return this.productModel.find({user_id : { $eq : input._id}}).exec();
    } 
    
    else if(input.choice === 'others' ){
      return this.productModel.find({user_id : { $ne : input._id}})
    }
  }
  

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
