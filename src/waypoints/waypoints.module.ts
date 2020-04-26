import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { WaypointSchema } from './schemas/waypoint.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Waypoint', schema: WaypointSchema }])
  ],
  exports: [MongooseModule]
})
export class WaypointsModule {}
