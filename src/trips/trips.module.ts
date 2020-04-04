import { Module } from '@nestjs/common';
import { TripsResolvers } from './trips.resolvers';
import { TripsService } from './trips.service';

@Module({
  providers: [TripsService, TripsResolvers],
})
export class TripsModule {}
