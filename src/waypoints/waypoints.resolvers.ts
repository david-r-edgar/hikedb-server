import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
// import { PubSub } from 'graphql-subscriptions';
import { Waypoint } from '../graphql';
// import { WaypointsGuard } from './waypoints.guard';
import { WaypointsService } from './waypoints.service';
import { CreateWaypointDto } from './dto/create-waypoint.dto';

// const pubSub = new PubSub();

@Resolver('Waypoint')
export class WaypointsResolvers {
  constructor(private readonly waypointsService: WaypointsService) {}

  // @Query()
  // // @UseGuards(WaypointsGuard)
  // async getWaypoints() {
  //   return this.waypointsService.findAll();
  // }

  // @Query('waypoint')
  // async findOneById(
  //   @Args('id')
  //   id: string,
  // ): Promise<Waypoint> {
  //   return this.waypointsService.findOneById(id);
  // }

  // @Mutation('createWaypoint')
  // async create(@Args('createWaypointInput') args: CreateWaypointDto): Promise<Waypoint> {
  //   const createdWaypoint = await this.waypointsService.create(args);
  //   // pubSub.publish('waypointCreated', { waypointCreated: createdWaypoint });
  //   return createdWaypoint;
  // }
}
