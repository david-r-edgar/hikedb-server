import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { WaypointsResolvers } from './waypoints.resolvers'
import { WaypointsService } from './waypoints.service'
import { WaypointSchema } from './schemas/waypoint.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Waypoint', schema: WaypointSchema }])
  ],
  providers: [WaypointsService, WaypointsResolvers],
  exports: [WaypointsService, MongooseModule]
})
export class WaypointsModule {}
