import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateProductInput } from './dto/create-product.input';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { Product } from './product.schema';
import { ShowDataInput } from './dto/show-data.input';


@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Product.name) private readonly productModel: Model<Product>
  ) { }


  async create(createUser: CreateUserInput): Promise<User> {
    const user = await new this.userModel(createUser);
    return user.save();
  }

  async createProduct(createProduct: CreateProductInput): Promise<Product> {
    const product = await new this.productModel(createProduct);
    return product.save();
  }


  async findAll(input: ShowDataInput): Promise<Product[]> {
    var Today = new Date().setUTCHours(0, 0, 0, 0);

    if (input.choice === 'personal')
      return await this.personalProducts(input);

    else if (input.choice === 'others')
      return await this.otherProducts(input);

  } 

  async personalProducts(input) {
    var Today = new Date().setUTCHours(0, 0, 0, 0);
    var condition = {
      price: { $gte: 50 },
      $or: [
        { created_time: { $eq: Today } },
        { approved: { $in: "approved" } }],
      user_id: { $eq: input._id }
    }
    return await this.productModel.find(
      condition
    )
      .exec();
  }




  async otherProducts(input) {
    var Today = new Date().setUTCHours(0, 0, 0, 0);

    var conditions = {
      price: { $gte: 50 },
      $or: [
        { created_time: { $eq: Today } },
        { approved: { $eq: "approved" } }],
      user_id: { $ne: input._id }
    }

    return await this.productModel.find(
      conditions
    )
      .exec();
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
