import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class CreateOfficeInput {
  @IsNotEmpty()
  @Field(() => Int)
  locationId: number;

  @IsUUID()
  @IsNotEmpty()
  @Field()
  hostId: string;
}
