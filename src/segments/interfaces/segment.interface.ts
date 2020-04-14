import { Document } from 'mongoose';

export interface Segment extends Document {
  readonly primaryDate: Date,
  readonly indexInDay: number,
  readonly startDate: Date,
  readonly finishDate: Date,
  readonly startLocation: string,
  readonly finishLocation: string,
  readonly route: string,
  readonly weather: string,
  readonly people: string,
  readonly lengthKm: number,
  readonly tags: [string],
  readonly comments: string
}
