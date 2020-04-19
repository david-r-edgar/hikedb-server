import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Segment } from './interfaces/segment.interface';
import { Args } from '@nestjs/graphql';
import { CreateSegmentDto } from './dto/create-segment.dto';

@Injectable()
export class SegmentsService {
  constructor(@InjectModel('Segment') private segmentModel: Model<Segment>) {}

  async create(createSegmentDto: CreateSegmentDto): Promise<Segment> {
    const createdSegment = new this.segmentModel(createSegmentDto);
    return createdSegment.save();
  }

  async findAll(): Promise<Segment[]> {
    return this.segmentModel.find().exec();
  }

  async findOneById(id: string): Promise<Segment> {
    return this.segmentModel.findOne({ _id: id }).exec()
  }
}
