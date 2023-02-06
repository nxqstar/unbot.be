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
  private cache: GameDataDto[] = [];

  constructor(
    @InjectModel(GameData.name) private gameDataModel: Model<GameDataDocument>,
  ) {}

  /**
   *
   * @param data: from body
   */
  async saveData(data: GameDataDto) {
    const created = new this.gameDataModel(data);
    created.save();
  }
  async updateGameData(data: GameDataDto) {
    try {
      this.cache.push(data);
      if (this.cache.length >= Number(process.env.CACHE_LIMIT)) {
        await this.gameDataModel.insertMany(this.cache);
        this.cache = [];
      }
    } catch (e) {
      console.log('updateGameData error', e.stack);
    }
  }
}
