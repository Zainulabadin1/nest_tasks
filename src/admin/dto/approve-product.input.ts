import { CreateProductInput } from '../../user/dto/create-product.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class ApproveProductInput extends PartialType(CreateProductInput) {
  @Field()
  _id: string

  @Field()
  approved: string
}
