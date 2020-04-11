import { Document } from 'mongoose';

export interface Hike extends Document {
  readonly name: string;
}
