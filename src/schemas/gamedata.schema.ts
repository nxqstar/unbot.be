import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IsNotEmpty, IsDefined } from 'class-validator';

export type GameDataDocument = HydratedDocument<GameData>;

@Schema()
export class GameData {
  @Prop({ required: true })
  measurement: string;

  @Prop({ required: true })
  timestamp: string;

  @Prop({ required: true })
  application_id: number;

  @Prop({ required: true })
  user_id: number;

  @Prop({ type: Object, required: true })
  details: object;
}

export const GameDataSchema = SchemaFactory.createForClass(GameData);

export class GameDataDto {
  @IsDefined()
  measurement: string;

  @IsDefined()
  timestamp: string;

  @IsDefined()
  application_id: number;

  @IsDefined()
  user_id: number;

  @IsDefined()
  details: object;
}
