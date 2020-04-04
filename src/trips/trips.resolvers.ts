import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
// import { PubSub } from 'graphql-subscriptions';
import { Trip } from '../graphql.schema';
// import { TripsGuard } from './trips.guard';
import { TripsService } from './trips.service';
import { CreateTripDto } from './dto/create-trip.dto';

// const pubSub = new PubSub();

@Resolver('Trip')
export class TripsResolvers {
  constructor(private readonly tripsService: TripsService) {}

  @Query()
  // @UseGuards(TripsGuard)
  async getTrips() {
    return this.tripsService.findAll();
  }

  @Query('trip')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<Trip> {
    return this.tripsService.findOneById(id);
  }

  @Mutation('createTrip')
  async create(@Args('createTripInput') args: CreateTripDto): Promise<Trip> {
    const createdTrip = await this.tripsService.create(args);
    // pubSub.publish('tripCreated', { tripCreated: createdTrip });
    return createdTrip;
  }
}
