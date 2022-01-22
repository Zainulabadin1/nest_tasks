import { CreateProductInput } from '../../user/dto/create-product.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field()
  _id: string

  @Field()
  price: number
}
