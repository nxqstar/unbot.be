import { Test, TestingModule } from '@nestjs/testing';
import { GamebullService } from './gamebull.service';

describe('GamebullService', () => {
  let service: GamebullService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GamebullService],
    }).compile();

    service = module.get<GamebullService>(GamebullService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
