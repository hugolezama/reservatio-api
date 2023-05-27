import { Injectable } from '@nestjs/common';
import { CreateOfficeInput } from './dto/create-office.input';
import { Office } from './entities/office.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OfficeService {
  constructor(
    @InjectRepository(Office) private officeRepository: Repository<Office>,
  ) {}

  create(createOfficeInput: CreateOfficeInput): Promise<Office> {
    return this.officeRepository.save(createOfficeInput);
  }

  async findAll(): Promise<Office[]> {
    return await this.officeRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} office`;
  // }

  // update(id: number, updateOfficeInput: UpdateOfficeInput) {
  //   return `This action updates a #${id} office`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} office`;
  // }
}
