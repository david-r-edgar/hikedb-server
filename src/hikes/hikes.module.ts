import { Module } from '@nestjs/common';
import { HikesResolvers } from './hikes.resolvers';
import { HikesService } from './hikes.service';

@Module({
  providers: [HikesService, HikesResolvers],
})
export class HikesModule {}
