import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ReservationModule } from './reservation/reservation.module';
import { OfficeModule } from './office/office.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

const typeORM = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Pass1234',
  database: 'reservatio',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
});

const graphql = GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  sortSchema: true,
});
@Module({
  imports: [typeORM, graphql, ReservationModule, OfficeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
