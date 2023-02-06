import { Controller, Get, Put, Req, Res, Body } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { GameDataPipe } from 'src/middlewares/gameData.pipe';
import { GameDataDto } from 'src/schemas/gamedata.schema';
import { GamebullService } from './gamebull.service';

@Controller('gamebull')
export class GamebullController {
  constructor(
    private readonly gamebullService: GamebullService,
    private readonly authService: AuthService,
  ) {}

  @Put('metadata')
  updateMetaData(@Body(new GameDataPipe()) body: GameDataDto) {
    this.gamebullService.saveData(body);
    return this.authService.login(body);
  }

  @Put('gamedata')
  async updateGameData(@Body(new GameDataPipe()) body: GameDataDto) {
    this.gamebullService.updateGameData(body);
  }
}
