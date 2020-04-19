import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SegmentsResolvers } from './segments.resolvers';
import { SegmentsService } from './segments.service';
import { WaypointsService } from '../waypoints/waypoints.service';
import { WaypointsModule } from '../waypoints/waypoints.module'
import { TripsService } from '../trips/trips.service';
import { TripsModule } from '../trips/trips.module'
import { SegmentSchema } from './schemas/segment.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Segment', schema: SegmentSchema }]), TripsModule],
  providers: [SegmentsService, SegmentsResolvers, TripsService],
})
export class SegmentsModule {}
