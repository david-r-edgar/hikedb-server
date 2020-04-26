import * as mongoose from 'mongoose'
import { WaypointSchema } from '../../waypoints/schemas/waypoint.schema'

export const SegmentSchema = new mongoose.Schema({
  userId: Number,
  primaryDate: Date,
  indexInDay: Number,
  startDate: Date,
  finishDate: Date,
  startLocation: String,
  finishLocation: String,
  route: String,
  weather: String,
  people: String,
  lengthKm: Number,
  comments: String,
  waypoints: [WaypointSchema],
  tags: [String],
  hike: String,
  trip: String
})
