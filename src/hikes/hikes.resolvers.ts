import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Hike } from '../graphql.schema';
import { HikesService } from './hikes.service';
// import { CreateHikeDto } from './dto/create-hike.dto';

@Resolver('Hike')
export class HikesResolvers {
  constructor(private readonly hikesService: HikesService) {}

  @Query()
  async getHikes() {
    return this.hikesService.findAll();
  }

  @Query('hike')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<Hike> {
    return this.hikesService.findOneById(id);
  }

  @Mutation('createHike')
  async create(@Args('createHikeInput') args): Promise<Hike> {
    const createdHike = await this.hikesService.create(args);
    return createdHike;
  }
}
