import { ParseIntPipe, UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard'
import { Segment } from '../graphql'
import { SegmentsService } from './segments.service'
import {
  CreateSegmentDto,
  UpdateSegmentDto,
  DeleteSegmentDto,
  InsertWaypointDto,
  UpdateWaypointDto,
  DeleteWaypointDto,
} from './dto/create-segment.dto'
import { CurrentUser } from '../users/decorators/current-user'
import { User } from '../users/interfaces/user.interface'

@Resolver('Segment')
export class SegmentsResolvers {
  constructor(private readonly segmentsService: SegmentsService) {}

  @Query()
  async getSegments() {
    return this.segmentsService.findAll()
  }

  @Query('segment')
  async findOneById(@Args('id') id: string): Promise<Segment> {
    return this.segmentsService.findOneById(id)
  }

  @Mutation('createSegment')
  @UseGuards(GqlAuthGuard)
  async create(
    @Args('createSegmentInput') args: CreateSegmentDto,
    @CurrentUser() user: User,
  ): Promise<Segment> {
    const createdSegment = await this.segmentsService.create(args)
    // pubSub.publish('segmentCreated', { segmentCreated: createdSegment });
    return createdSegment
  }

  @Mutation()
  @UseGuards(GqlAuthGuard)
  async updateSegment(
    @Args('updateSegmentInput') args: UpdateSegmentDto,
  ): Promise<Segment> {
    const updatedSegment = await this.segmentsService.update(args)
    return updatedSegment
  }

  @Mutation()
  @UseGuards(GqlAuthGuard)
  async deleteSegment(
    @Args('deleteSegmentInput') args: DeleteSegmentDto,
  ): Promise<Boolean> {
    return await this.segmentsService.deleteById(args.id)
  }

  @Mutation()
  @UseGuards(GqlAuthGuard)
  async insertWaypoint(
    @Args('insertWaypointInput') args: InsertWaypointDto,
    @CurrentUser() user: User,
  ): Promise<Segment> {
    console.log('insertWaypoint, user:', user)
    return await this.segmentsService.insertWaypoint(
      args.segmentId,
      args.waypointDetailsInput,
      args.insertBefore,
      args.insertAfter,
    )
  }

  @Mutation()
  @UseGuards(GqlAuthGuard)
  async updateWaypoint(
    @Args('updateWaypointInput') args: UpdateWaypointDto,
  ): Promise<Segment> {
    return await this.segmentsService.updateWaypoint(
      args.segmentId,
      args.waypointId,
      args.waypointDetailsInput,
    )
  }

  @Mutation()
  @UseGuards(GqlAuthGuard)
  async deleteWaypoint(
    @Args('deleteWaypointInput') args: DeleteWaypointDto,
  ): Promise<Segment> {
    return await this.segmentsService.deleteWaypointById(
      args.segmentId,
      args.waypointId,
    )
  }
}
