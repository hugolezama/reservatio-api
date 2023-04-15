import { PartialType } from '@nestjs/mapped-types';
import { CreateReservationDto } from './create-reservation.dto';

export class UpdateReservationDto extends PartialType(CreateReservationDto) {
  officeId?: number;
  date?: Date;
  startTime?: Date;
  endTime?: Date;
}
