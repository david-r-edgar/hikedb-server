import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TripsResolvers } from './trips.resolvers';
import { TripsService } from './trips.service';
import { TripSchema } from './schemas/trip.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Trip', schema: TripSchema }])],
  providers: [TripsService, TripsResolvers],
})
export class TripsModule {}
