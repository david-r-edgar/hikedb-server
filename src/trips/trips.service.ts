import { Injectable } from '@nestjs/common';
import { Trip } from '../graphql.schema';

@Injectable()
export class TripsService {
  private readonly trips: Trip[] = [{ id: 1, name: 'Trip' }];

  create(trip: Trip): Trip {
    trip.id = this.trips.length + 1;
    this.trips.push(trip);
    return trip;
  }

  findAll(): Trip[] {
    return this.trips;
  }

  findOneById(id: number): Trip {
    return this.trips.find(trip => trip.id === id);
  }
}
