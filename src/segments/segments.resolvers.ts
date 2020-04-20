import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Segment, WaypointDetailsInput } from '../graphql.schema';
import { SegmentsService } from './segments.service';
import { CreateSegmentDto, UpdateSegmentDto, DeleteSegmentDto, InsertWaypointDto, UpdateWaypointDto, DeleteWaypointDto } from './dto/create-segment.dto';
// import { WaypointsResolvers } from '../waypoints/waypoints.resolvers'
// import { WaypointsService } from '../waypoints/waypoints.service'

@Resolver('Segment')
export class SegmentsResolvers {
  constructor(
    private readonly segmentsService: SegmentsService,
  ) {}

  @Query()
  async getSegments() {
    return this.segmentsService.findAll()
  }

  @Query('segment')
  async findOneById(
    @Args('id')
    id: string,
  ): Promise<Segment> {
    return this.segmentsService.findOneById(id);
  }

  @Mutation('createSegment')
  async create(@Args('createSegmentInput') args: CreateSegmentDto): Promise<Segment> {
    const createdSegment = await this.segmentsService.create(args);
    // pubSub.publish('segmentCreated', { segmentCreated: createdSegment });
    return createdSegment;
  }

  @Mutation()
  async updateSegment(@Args('updateSegmentInput') args: UpdateSegmentDto): Promise<Segment> {
    const updatedSegment = await this.segmentsService.update(args)
    return updatedSegment
  }

  @Mutation()
  async deleteSegment(@Args('deleteSegmentInput') args: DeleteSegmentDto): Promise<Boolean> {
    console.log('resolver, deleteSegment', args)
    return await this.segmentsService.deleteById(args.id)
  }

  async insertWaypoint(@Args('insertWaypointInput') args: InsertWaypointDto): Promise<Segment> {
    return null
  }

  async updateWaypoint(@Args('updateWaypointInput') args: UpdateWaypointDto): Promise<Segment> {
    return null
  }

  async deleteWaypoint(@Args('deleteWaypointInput') args: DeleteWaypointDto): Promise<Segment> {
    // find segment by id

    // find waypoint in segment

    // remove waypoint from array

    // write back segment

    return null
  }




  // @Mutation('updateSegment')
  // async updateSegment(@Args('updateSegmentInput') args): Promise<Segment> {
  //   // find segment by id


  //   const segment = await this.segmentsService.findSegmentById(ObjectId('5e9b77a8c4b94831dd3aad2c'))

  //   console.log('segments resolver update')
  //   console.log({segment})
  //   //


  //   // const createdSegment = await this.segmentsService.create(args);
  //   // return createdSegment;

  //   return null
  //  }

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
