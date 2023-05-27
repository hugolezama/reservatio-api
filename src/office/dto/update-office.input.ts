import { CreateOfficeInput } from './create-office.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOfficeInput extends PartialType(CreateOfficeInput) {
  @Field(() => Int)
  id: number;
}
