import { Document } from 'mongoose';
import { Waypoint } from '../../waypoints/interfaces/waypoint.interface'

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
  readonly comments: string,
  readonly waypoints: [Waypoint],
  readonly tags: [string],
  readonly hikeName: string,
  readonly tripName: string
}
