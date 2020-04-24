import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'
import { join } from 'path'
import { AppController } from './app.controller'
// import { AppService } from './app.service';
import { SegmentsModule } from './segments/segments.module'
import { WaypointsModule } from './waypoints/waypoints.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'

const mongoConnectURL = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@${process.env.MONGODB}`

@Module({
  imports: [
    SegmentsModule,
    WaypointsModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      context: ({ req }) => ({ req }),
    }),
    MongooseModule.forRoot(mongoConnectURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
