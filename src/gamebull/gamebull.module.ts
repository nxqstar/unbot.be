import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { JwtMiddleware } from 'src/middlewares/jwt.middleware';
import { GamebullController } from './gamebull.controller';
import { GamebullService } from './gamebull.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GameData, GameDataSchema } from 'src/schemas/gamedata.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      { name: GameData.name, schema: GameDataSchema },
    ]),
  ],
  providers: [GamebullService, JwtService],
  controllers: [GamebullController],
})
export class GamebullModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .exclude('/gamebull/metadata')
      .forRoutes(GamebullController);
  }
}
