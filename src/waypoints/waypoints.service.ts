import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Waypoint } from './interfaces/waypoint.interface'
import { CreateWaypointDto } from './dto/create-waypoint.dto'

@Injectable()
export class WaypointsService {
  constructor(
    @InjectModel('Waypoint') private waypointModel: Model<Waypoint>
  ) {}

  async create(createWaypointDto: CreateWaypointDto): Promise<Waypoint> {
    const createdWaypoint = new this.waypointModel(createWaypointDto)
    return createdWaypoint.save()
  }

  async findAll(): Promise<Waypoint[]> {
    return this.waypointModel.find().exec()
  }

  async findOneById(id: string): Promise<Waypoint> {
    return this.waypointModel.findOne({ _id: id }).exec()
  }
}
