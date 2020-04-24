import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { SegmentsResolvers } from './segments.resolvers'
import { SegmentsService } from './segments.service'
import { WaypointsModule } from '../waypoints/waypoints.module'
import { SegmentSchema } from './schemas/segment.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Segment', schema: SegmentSchema }]),
    WaypointsModule,
  ],
  providers: [SegmentsService, SegmentsResolvers],
})
export class SegmentsModule {}
