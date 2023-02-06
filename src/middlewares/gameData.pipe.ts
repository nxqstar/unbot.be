import {
  ArgumentMetadata,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { GameDataDto } from 'src/schemas/gamedata.schema';

export class GameDataPipe implements PipeTransform<any> {
  async transform(value: any, { type }: ArgumentMetadata): Promise<any> {
    if (type === 'body') {
      const gameDataClass = plainToInstance(GameDataDto, value);
      const verifyErrors = await validate(gameDataClass);
      if (verifyErrors.length > 0) {
        throw new BadRequestException('Data is invalid');
      }
    }

    return value;
  }
}
