import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Segment, WaypointDetailsInput } from '../graphql.schema';
import { SegmentsService } from './segments.service';
// import { CreateSegmentDto } from './dto/create-segment.dto';
// import { WaypointsResolvers } from '../waypoints/waypoints.resolvers'
// import { WaypointsService } from '../waypoints/waypoints.service'
import { TripsService } from '../trips/trips.service'
const ObjectId = require('mongodb').ObjectID;

@Resolver('Segment')
export class SegmentsResolvers {
  constructor(
    private readonly segmentsService: SegmentsService,
    private readonly tripsService: TripsService
  ) {}

  // @Query()
  // async getSegments() {
  //   return this.segmentsService.findAll();
  // }

  @Query('segment')
  async findOneById(
    @Args('id')
    id: string,
  ): Promise<Segment> {
    return this.segmentsService.findOneById(id);


  }

  @Mutation('updateSegment')
  async updateSegment(@Args('updateSegmentInput') args): Promise<Segment> {
    // find segment by id


    const segment = await this.tripsService.findSegmentById(ObjectId('5e9b77a8c4b94831dd3aad2c'))

    console.log('segments resolver update')
    console.log({segment})
    //


    // const createdSegment = await this.segmentsService.create(args);
    // return createdSegment;

    return null
  }

  // @Mutation('createSegment')
  // async create(@Args('createSegmentInput') args): Promise<Segment> {
  //   const createdSegment = await this.segmentsService.create(args);
  //   return createdSegment;
  // }

  // @Mutation('insertNewWaypoint')
  // async insertNewWaypoint(
  //   @Args('segmentId') segmentId: string,
  //   @Args('waypointDetailsInput') waypointDetailsInput: WaypointDetailsInput,
  //   @Args('insertBefore') insertBefore,
  //   @Args('insertAfter') insertAfter): Promise<Segment> {
  //   console.log({segmentId, waypointDetailsInput, insertBefore, insertAfter})

  //   // do create waypoint (using waypoint resolver?)
  //   // const createdWaypoint = WaypointsResolvers.create(waypointDetailsInput)
  //   const createdWaypoint = await this.waypointsService.create(waypointDetailsInput)

  //   console.log({createdWaypoint})

  //   if (insertBefore) {
  //     // if insertBefore, find that id in waypoints array, choose following index
  //   }
  //   else if (insertAfter) {

  //   }
  //   else {

  //   }

  //   // get id back
  //   // if insertBefore, find that id in waypoints array, choose following index
  //   // if insertAfter, find that id in waypoints array, choose previous index
  //   // otherwise index = 0
  //   // insert using push with position = index
  //   // https://docs.mongodb.com/manual/reference/operator/update/push/

  //   // return segment
  //   return this.findOneById(segmentId)
  // }
}
