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
  async findOneById(@Args('id') id: string): Promise<Segment> {
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
    return await this.segmentsService.deleteById(args.id)
  }

  @Mutation()
  async insertWaypoint(@Args('insertWaypointInput') args: InsertWaypointDto): Promise<Segment> {
    return await this.segmentsService.insertWaypoint(
      args.segmentId,
      args.waypointDetailsInput,
      args.insertBefore,
      args.insertAfter
    )
  }

  @Mutation()
  async updateWaypoint(@Args('updateWaypointInput') args: UpdateWaypointDto): Promise<Segment> {
    return await this.segmentsService.updateWaypoint(args.segmentId, args.waypointId, args.waypointDetailsInput)
  }

  @Mutation()
  async deleteWaypoint(@Args('deleteWaypointInput') args: DeleteWaypointDto): Promise<Segment> {
    return await this.segmentsService.deleteWaypointById(args.segmentId, args.waypointId)
  }
}
