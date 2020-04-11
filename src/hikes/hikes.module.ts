import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HikesResolvers } from './hikes.resolvers';
import { HikesService } from './hikes.service';
import { HikeSchema } from './schemas/hike.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Hike', schema: HikeSchema }])],
  providers: [HikesService, HikesResolvers],
})
export class HikesModule {}
