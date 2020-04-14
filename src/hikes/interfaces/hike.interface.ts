import { Document } from 'mongoose';
import { Segment } from '../../segments/interfaces/segment.interface'
import { HikeType } from '../../graphql.schema'

export interface Hike extends Document {
  readonly name: string
  readonly startDate: Date
  readonly finishDate: Date
  readonly type: HikeType
  readonly tags: [string]
  readonly segments: [Segment]
}
