import { Document } from 'mongoose';

export interface Waypoint extends Document {
  readonly name: string
  readonly lat: number
  readonly lng: number
}
