import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path'
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TripsModule } from './trips/trips.module';
import { HikesModule } from './hikes/hikes.module';
import { SegmentsModule } from './segments/segments.module';
import { WaypointsModule } from './waypoints/waypoints.module';

const mongoConnectURL = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@${process.env.MONGODB}`

@Module({
  imports: [
    TripsModule,
    HikesModule,
    SegmentsModule,
    WaypointsModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class'
      }
    }),
    MongooseModule.forRoot(mongoConnectURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
