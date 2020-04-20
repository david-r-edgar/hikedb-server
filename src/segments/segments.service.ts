import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Segment } from './interfaces/segment.interface';
import { Args } from '@nestjs/graphql';
import { CreateSegmentDto, UpdateSegmentDto } from './dto/create-segment.dto';
// const ObjectId = require('mongodb').ObjectID;

@Injectable()
export class SegmentsService {
  constructor(@InjectModel('Segment') private segmentModel: Model<Segment>) {}

  async create(createSegmentDto: CreateSegmentDto): Promise<Segment> {
    const createdSegment = new this.segmentModel(createSegmentDto);
    return createdSegment.save()
  }

  async findAll(): Promise<Segment[]> {
    return this.segmentModel.find().exec();
  }

  async findOneById(id: string): Promise<Segment> {
    return this.segmentModel.findOne({ _id: id }).exec()
  }

  async update(args: UpdateSegmentDto): Promise<Segment> {
    return this.segmentModel.findOneAndUpdate({ _id: args.id }, args.patch, { new: true }, err => {
    })
  }

  async deleteById(id: string): Promise<Boolean> {
    const deleteResult = await this.segmentModel.deleteOne({ _id: id })
    return deleteResult.ok === 1
  }
}
