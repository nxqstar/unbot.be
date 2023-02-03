import { Controller, Get, Put, Req, Res } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { GamebullService } from './gamebull.service';

@Controller('gamebull')
export class GamebullController {
  constructor(
    private readonly gamebullService: GamebullService,
    private readonly authService: AuthService,
  ) {}

  @Put('metadata')
  updateMetaData(@Req() request: any) {
    const body = request.body;
    this.gamebullService.saveData(body);
    return this.authService.login(body);
  }

  @Put('gamedata')
  updateGameData(@Req() request: any) {
    const body = request.body;
    this.gamebullService.updateGameData(body);
  }
}
