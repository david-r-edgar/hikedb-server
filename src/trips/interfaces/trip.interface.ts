import { Document } from 'mongoose';
import { Hike } from '../../hikes/interfaces/hike.interface'

export interface Trip extends Document {
  readonly name: string
  readonly startDate: Date
  readonly finishDate: Date
  readonly hikes: [Hike]
}
