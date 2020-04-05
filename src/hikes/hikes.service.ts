import { Injectable } from '@nestjs/common';
import { Hike } from '../graphql.schema';

@Injectable()
export class HikesService {
  private readonly hikes: Hike[] = [{ id: 1, name: 'Hike', startDate: new Date('2000-01-01'), finishDate: new Date('2000-01-10') }];

  create(hike: Hike): Hike {
    hike.id = this.hikes.length + 1;
    this.hikes.push(hike);
    return hike;
  }

  findAll(): Hike[] {
    return this.hikes;
  }

  findOneById(id: number): Hike {
    return this.hikes.find(hike => hike.id === id);
  }
}
