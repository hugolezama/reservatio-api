import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  officeId: number;
  @Column({ type: 'date' })
  date: Date;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  bookedDate: Date;
  @Column({ type: 'time' })
  startTime: Date;
  @Column({ type: 'time' })
  endTime: Date;
}
