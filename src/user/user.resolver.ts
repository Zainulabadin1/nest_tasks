import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.schema';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateProductInput } from './dto/create-product.input';
import { UserDto } from './dto/user.dto';
import { ProductDto } from './dto/product.dto';
import { ShowDataInput } from './dto/show-data.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserDto)
  createUser(@Args('input') input: CreateUserInput) {
    return this.userService.create(input);
  }

  @Mutation(()=>ProductDto)
  createProduct(@Args('input') input: CreateProductInput){
    return this.userService.createProduct(input);
  }


  @Query(() => [ProductDto])
  findAllProducts(@Args ('input') input: ShowDataInput) {
    return this.userService.findAll(input);
  }

  // @Query(() => UserDto, { name: 'user' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.userService.findOne(id);
  // }

  @Mutation(() => UserDto)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    //return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => UserDto)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
