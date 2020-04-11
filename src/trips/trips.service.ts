/*
import { Injectable } from '@nestjs/common';
import { Trip } from '../graphql.schema';

@Injectable()
export class TripsService {
  private readonly trips: Trip[] = [{ id: '1', name: 'Trip', startDate: new Date('2000-01-01'), finishDate: new Date('2000-01-10') }];

  create(trip: Trip): Trip {
    trip.id = (this.trips.length + 1).toString();
    this.trips.push(trip);
    return trip;
  }

  findAll(): Trip[] {
    return this.trips;
  }

  findOneById(id: string): Trip {
    return this.trips.find(trip => trip.id === id);
  }
}*/

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Trip } from './interfaces/trip.interface';
// import { Hike } from '../graphql.schema';
import { CreateTripDto } from './dto/create-trip.dto';

@Injectable()
export class TripsService {
  constructor(@InjectModel('Trip') private hikeModel: Model<Trip>) {}

  async create(createTripDto: CreateTripDto): Promise<Trip> {
    const createdTrip = new this.hikeModel(createTripDto);
    return createdTrip.save();
  }

  async findAll(): Promise<Trip[]> {
    return this.hikeModel.find().exec();
  }

  async findOneById(id: string): Promise<Trip> {
    return this.hikeModel.findOne({ _id: id }).exec()
  }
}
