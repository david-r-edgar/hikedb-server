import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { SegmentsResolvers } from './segments.resolvers'
import { SegmentsService } from './segments.service'
import { WaypointsModule } from '../waypoints/waypoints.module'
import { SegmentSchema } from './schemas/segment.schema'
import { UsersModule } from 'src/users/users.module'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Segment', schema: SegmentSchema }]),
    WaypointsModule,
    UsersModule
  ],
  providers: [SegmentsService, SegmentsResolvers]
})
export class SegmentsModule {}
