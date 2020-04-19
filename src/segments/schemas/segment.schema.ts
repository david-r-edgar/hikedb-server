import * as mongoose from 'mongoose'
import { WaypointSchema } from '../../waypoints/schemas/waypoint.schema';

export const SegmentSchema = new mongoose.Schema({
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
  tags: [String],
  comments: String,
  waypoints: [WaypointSchema]
})
