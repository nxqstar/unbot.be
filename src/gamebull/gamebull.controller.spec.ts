import { Test, TestingModule } from '@nestjs/testing';
import { GamebullController } from './gamebull.controller';

describe('GamebullController', () => {
  let controller: GamebullController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GamebullController],
    }).compile();

    controller = module.get<GamebullController>(GamebullController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
