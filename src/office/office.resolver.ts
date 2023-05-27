import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OfficeService } from './office.service';
import { Office } from './entities/office.entity';
import { CreateOfficeInput } from './dto/create-office.input';
import { UpdateOfficeInput } from './dto/update-office.input';

@Resolver(() => Office)
export class OfficeResolver {
  constructor(private readonly officeService: OfficeService) {}

  @Query(() => [Office], { name: 'office' })
  findAll() {
    return this.officeService.findAll();
  }

  @Mutation(() => Office)
  createOffice(@Args('officeInput') officeInput: CreateOfficeInput) {
    return this.officeService.create(officeInput);
  }

  // @Query(() => Office, { name: 'office' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.officeService.findOne(id);
  // }

  // @Mutation(() => Office)
  // updateOffice(
  //   @Args('updateOfficeInput') updateOfficeInput: UpdateOfficeInput,
  // ) {
  //   return this.officeService.update(updateOfficeInput.id, updateOfficeInput);
  // }

  // @Mutation(() => Office)
  // removeOffice(@Args('id', { type: () => Int }) id: number) {
  //   return this.officeService.remove(id);
  // }
}
