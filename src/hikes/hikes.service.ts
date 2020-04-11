import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Hike } from './interfaces/hike.interface';
// import { Hike } from '../graphql.schema';
import { CreateHikeDto } from './dto/create-hike.dto';

@Injectable()
export class HikesService {
  constructor(@InjectModel('Hike') private hikeModel: Model<Hike>) {}

  async create(createHikeDto: CreateHikeDto): Promise<Hike> {
    const createdHike = new this.hikeModel(createHikeDto);
    return createdHike.save();
  }

  async findAll(): Promise<Hike[]> {
    return this.hikeModel.find().exec();
  }

  async findOneById(id: string): Promise<Hike> {
    return this.hikeModel.findOne({ _id: id }).exec()
  }

  /*
  private readonly hikes: Hike[] = [{ id: 1, name: 'Hike', startDate: new Date('2000-01-01'), finishDate: new Date('2000-01-10') }];

  create(hike: Hike): Hike {
    hike.id = this.hikes.length + 1;
    this.hikes.push(hike);
    return hike;
  }

  findAll(): Hike[] {
    return this.hikes;
  }

  findOneById(id: number): Hike {
    return this.hikes.find(hike => hike.id === id);
  }
  */
}
