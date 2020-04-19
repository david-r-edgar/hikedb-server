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
import { Args } from '@nestjs/graphql';
import { Segment } from '../segments/interfaces/segment.interface';
// import { Hike } from '../graphql.schema';
import { CreateTripDto } from './dto/create-trip.dto';

@Injectable()
export class TripsService {
  constructor(@InjectModel('Trip') private tripModel: Model<Trip>) {}

  async create(createTripDto: CreateTripDto): Promise<Trip> {
    const createdTrip = new this.tripModel(createTripDto);
    return createdTrip.save();
  }

  async findAll(): Promise<Trip[]> {
    return this.tripModel.find().exec();
  }

  async findAllSegments(): Promise<Segment[]> {
    const trips = await this.tripModel.find({ 'hikes.segments': { $exists: true, $ne: [] } }, {'hikes.segments': 1 , _id: 0}).exec()
    const tripSegments = trips.reduce(((tripSegmentList, trip) => {
      const hikesSegments = trip.hikes.reduce((hikeSegmentList, hike) => {
        return hikeSegmentList.concat(hike.segments)
      }, [])
      return tripSegmentList.concat(hikesSegments)
    }), [])

    return tripSegments

    // let resultSegments = []
    // console.log({trips})
    // trips.forEach(trip => {
    //   console.log({hikes: trip.hikes})
    //   //console.log({results0hikes: trips[0].hikes[0]})
    //   trip.hikes.forEach(hike => {
    //     console.log({hike})
    //     //console.log({results0hikes: trips[0].hikes[0]})
    //     hike.segments.forEach(segment => {
    //       console.log({segment})

    //       resultSegments.push(segment)
    //     })
    //   })
    // })
    // return resultSegments
  }

  async findOneById(id: string): Promise<Trip> {
    return this.tripModel.findOne({ _id: id }).exec()
  }

  async findSegmentById(
    @Args('id')
    id: string
    ): Promise<Segment> {

    console.log({id})

    const segment = await this.tripModel.aggregate( [ { $unwind : "$hikes" }, { "$unwind": "$hikes.segments" }, { "$match": { "hikes.segments._id": id  }} ])

    console.log({segment})
    return segment[0]
    // const trips = await this.tripModel.find({ 'hikes.segments': { $exists: true, $ne: [] } }, {'hikes.segments': 1 , _id: 0}).exec()
    // const tripSegments = trips.reduce(((tripSegmentList, trip) => {
    //   const hikesSegments = trip.hikes.reduce((hikeSegmentList, hike) => {
    //     return hikeSegmentList.concat(hike.segments)
    //   }, [])
    //   return tripSegmentList.concat(hikesSegments)
    // }), [])

    // return tripSegments
  }
}
