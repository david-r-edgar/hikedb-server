import * as mongoose from 'mongoose'
import { SegmentSchema } from '../../segments/schemas/segment.schema';

export const HikeSchema = new mongoose.Schema({
  name: String,
  startDate: Date,
  finishDate: Date,
  type: {
    type: String,
    enum: [
      'DayHike',
      'Camping',
      'Hostelling',
      'NightHike',
      'GuidedTour',
      'Challenge'
    ]
  },
  tags: [String],
  segments: [SegmentSchema]
})
