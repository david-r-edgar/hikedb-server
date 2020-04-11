import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path'
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TripsModule } from './trips/trips.module';
import { HikesModule } from './hikes/hikes.module';
import { SegmentsModule } from './segments/segments.module';

const mongoConnectURL = 'mongodb+srv://hikedb:GyyXK9Hp06mjfrEf@cluster0-82r89.gcp.mongodb.net/hikedb'

@Module({
  imports: [
    TripsModule,
    HikesModule,
    SegmentsModule,
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
