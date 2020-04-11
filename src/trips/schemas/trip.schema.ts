import * as mongoose from 'mongoose'
import { HikeSchema } from '../../hikes/schemas/hike.schema';

export const TripSchema = new mongoose.Schema({
  name: String,
  startDate: Date,
  finishDate: Date,
  hikes: [HikeSchema],
})
