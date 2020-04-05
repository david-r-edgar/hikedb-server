import { Module } from '@nestjs/common';
import { SegmentsResolvers } from './segments.resolvers';
import { SegmentsService } from './segments.service';

@Module({
  providers: [SegmentsService, SegmentsResolvers],
})
export class SegmentsModule {}
