import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import {
  GameData,
  GameDataDocument,
  GameDataDto,
} from 'src/schemas/gamedata.schema';

@Injectable()
export class GamebullService {
  constructor(
    @InjectModel(GameData.name) private gameDataModel: Model<GameDataDocument>,
  ) {}

  async saveData(data: GameDataDto) {
    const created = new this.gameDataModel(data);
    created.save();
    //save to db
    // {
    //   measurement, //check in supported list
    //   timestamp, //check the diff time is not too big
    //   application_id,
    //   user_id, //check if match with user_id in token
    //   details, //check string
    // }
  }
  updateGameData(body: any) {
    console.log('updateGameData');

    //call saveData
  }
}
