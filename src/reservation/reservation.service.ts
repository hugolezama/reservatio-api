import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation) private repository: Repository<Reservation>,
  ) {}

  create(createReservationDto: CreateReservationDto) {
    const newReservation = this.repository.create(createReservationDto);
    return this.repository.save(newReservation);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    console.log('findOne ', id);
    const found = await this.repository.findOne({
      where: { id },
    });
    if (!found) {
      return new HttpException(
        `Reservation id: ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return found;
  }

  async update(id: number, updateReservationDto: UpdateReservationDto) {
    const found = await this.findOne(id);
    if (found instanceof Error) return found;
    this.repository.update({ id }, updateReservationDto);
  }

  async remove(id: number) {
    const found = await this.findOne(id);
    if (found instanceof Error) return found;
    return this.repository.delete({ id });
  }
}
