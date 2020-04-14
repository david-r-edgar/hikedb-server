import * as mongoose from 'mongoose'

export const WaypointSchema = new mongoose.Schema({
  name: String,
  lat: Number,
  lng: Number
})
