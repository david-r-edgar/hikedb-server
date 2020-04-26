import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Segment } from './interfaces/segment.interface'
import { Waypoint } from '../waypoints/interfaces/waypoint.interface'
import { Args } from '@nestjs/graphql'
import { CreateSegmentDto, UpdateSegmentDto } from './dto/create-segment.dto'
import { WaypointDetailsInput } from '../graphql'
// const ObjectId = require('mongodb').ObjectID;

@Injectable()
export class SegmentsService {
  constructor(
    @InjectModel('Segment') private segmentModel: Model<Segment>,
    @InjectModel('Waypoint') private waypointModel: Model<Waypoint>
  ) {}

  async create(createSegmentDto: CreateSegmentDto): Promise<Segment> {
    const createdSegment = new this.segmentModel(createSegmentDto)
    return createdSegment.save()
  }

  async findAll(): Promise<Segment[]> {
    return this.segmentModel.find().exec()
  }

  async findOneById(id: string): Promise<Segment> {
    return this.segmentModel.findOne({ _id: id }).exec()
  }

  async findOneByIdForUser(id: string, userId: number): Promise<Segment> {
    return this.segmentModel.findOne({ _id: id, userId }).exec()
  }

  async update(
    args: UpdateSegmentDto,
    currentUserId: number
  ): Promise<Segment> {
    return this.segmentModel.findOneAndUpdate(
      { _id: args.id, userId: currentUserId },
      args.patch,
      { new: true },
      err => {}
    )
  }

  async deleteById(id: string, currentUserId: number): Promise<Boolean> {
    try {
      const deleteResult = await this.segmentModel.deleteOne({
        _id: id,
        userId: currentUserId
      })
      return deleteResult.ok === 1 && deleteResult.n === 1
    } catch (err) {}
    return false
  }

  async insertWaypoint(
    segmentId: string,
    currentUserId: number,
    waypointDetailsInput: WaypointDetailsInput,
    insertBefore: string,
    insertAfter: string
  ): Promise<Segment> {
    try {
      const segment = await this.findOneByIdForUser(segmentId, currentUserId)
      const waypointToInsert = new this.waypointModel(waypointDetailsInput)
      if (insertBefore) {
        const index = segment.waypoints.findIndex(
          wpt => wpt.id === insertBefore
        )
        segment.waypoints.splice(index, 0, waypointToInsert)
      } else if (insertAfter) {
        const index = segment.waypoints.findIndex(wpt => wpt.id === insertAfter)
        segment.waypoints.splice(index + 1, 0, waypointToInsert)
      } else {
        segment.waypoints.push(waypointToInsert)
      }
      segment.save()
      return segment
    } catch (err) {}
  }

  async updateWaypoint(
    segmentId: string,
    waypointId: string,
    currentUserId: number,
    waypointDetailsInput: WaypointDetailsInput
  ): Promise<Segment> {
    try {
      const segment = await this.findOneByIdForUser(segmentId, currentUserId)
      const index = segment.waypoints.findIndex(wpt => wpt.id === waypointId)
      Object.assign(segment.waypoints[index], waypointDetailsInput)
      segment.save()
      return segment
    } catch (err) {}
  }

  async deleteWaypointById(
    segmentId: string,
    waypointId: string,
    currentUserId: number
  ): Promise<Segment> {
    try {
      const segment = await this.findOneByIdForUser(segmentId, currentUserId)

      const index = segment.waypoints.findIndex(wpt => wpt.id === waypointId)
      segment.waypoints.splice(index, 1)

      segment.save()
      return segment
    } catch (err) {}
  }
}
