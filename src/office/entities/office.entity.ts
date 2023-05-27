import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Office {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Office ID' })
  officeId: number;

  @Column()
  @Field(() => Int, { description: 'Location ID' })
  locationId: number;

  @Column()
  @Field({ description: 'Host ID' })
  hostId: string;
}
