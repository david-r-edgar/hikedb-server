import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Segment } from '../graphql.schema';
import { SegmentsService } from './segments.service';
// import { CreateSegmentDto } from './dto/create-segment.dto';

@Resolver('Segment')
export class SegmentsResolvers {
  constructor(private readonly segmentsService: SegmentsService) {}

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

  @Mutation('createSegment')
  async create(@Args('createSegmentInput') args): Promise<Segment> {
    const createdSegment = await this.segmentsService.create(args);
    return createdSegment;
  }
}
