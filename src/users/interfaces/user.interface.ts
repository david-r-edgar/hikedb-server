import { Document } from 'mongoose'

export interface User extends Document {
  readonly userId: number
  readonly username: string
  readonly hash: string
}
