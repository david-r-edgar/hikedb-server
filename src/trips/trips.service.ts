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
}
