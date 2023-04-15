import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Reservation } from './reservation/entities/reservation.entity';
import { ReservationModule } from './reservation/reservation.module';

const database: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Pass1234',
  database: 'reservatio',
  entities: [Reservation],
  synchronize: true,
};
@Module({
  imports: [ReservationModule, TypeOrmModule.forRoot(database)],
  controllers: [],
  providers: [],
})
export class AppModule {}
