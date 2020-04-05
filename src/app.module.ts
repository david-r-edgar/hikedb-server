import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TripsModule } from './trips/trips.module';
import { HikesModule } from './hikes/hikes.module';
import { SegmentsModule } from './segments/segments.module';
import { join } from 'path'

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
    })
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
