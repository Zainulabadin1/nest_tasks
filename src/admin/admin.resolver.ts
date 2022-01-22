import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { Admin } from './admin.schema';
import { CreateAdminInput } from './dto/create-admin.input';
import { UpdateAdminInput } from './dto/update-admin.input';
import { UpdateProductInput } from './dto/update-product.input';
import { ApproveProductInput } from './dto/approve-product.input';
import { AdminDto } from './dto/admin.dto';
import { ProductDto } from 'src/user/dto/product.dto';

@Resolver(() => AdminDto)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation(() => AdminDto)
  createAdmin(@Args('createAdminInput') createAdminInput: CreateAdminInput) {
    return this.adminService.create(createAdminInput);
  }

  @Query(() => [ProductDto])
  async unapprovedProducts()
  {
   return this.adminService.unapprovedProducts();
  }

  @Mutation(()=>ProductDto)
  updatePrice(@Args('input') input: UpdateProductInput) {
    return this.adminService.updateProductPrice(input)
  }

  @Mutation(()=> [ProductDto])
  async approveProducts(@Args({ name: 'ids', type: () => [String] }) ids: String[]){
    return await this.adminService.approve_products(ids)
  }
 

  @Query(() => [AdminDto], { name: 'admin' })
  findAll() {
    return this.adminService.findAll();
  }

  @Query(() => AdminDto, { name: 'admin' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.adminService.findOne(id);
  }

  @Mutation(() => AdminDto)
  updateAdmin(@Args('updateAdminInput') updateAdminInput: UpdateAdminInput) {
    return this.adminService.update(updateAdminInput.id, updateAdminInput);
  }

  @Mutation(() => AdminDto)
  removeAdmin(@Args('id', { type: () => Int }) id: number) {
    return this.adminService.remove(id);
  }
}
