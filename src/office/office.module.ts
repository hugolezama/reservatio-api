import { Module } from '@nestjs/common';
import { OfficeService } from './office.service';
import { OfficeResolver } from './office.resolver';
import { Office } from './entities/office.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Office])],
  providers: [OfficeResolver, OfficeService],
})
export class OfficeModule {}
