import { Injectable } from '@nestjs/common';
import { Segment } from '../graphql.schema';

@Injectable()
export class SegmentsService {
  private readonly segments: Segment[] = [{ id: 1, startLocation: 'beginning', finishLocation: 'ending', startDate: new Date('2000-01-01'), finishDate: new Date('2000-01-10') }];

  create(segment: Segment): Segment {
    segment.id = this.segments.length + 1;
    this.segments.push(segment);
    return segment;
  }

  findAll(): Segment[] {
    return this.segments;
  }

  findOneById(id: number): Segment {
    return this.segments.find(segment => segment.id === id);
  }
}
