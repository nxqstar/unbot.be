import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  use(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      res.writeHead(401, { 'content-type': 'application/json' });
      res.write(
        JSON.stringify({
          msg: 'Authorization is required',
        }),
      );
      res.end();
    } else {
      try {
        const token = req.headers.authorization.replace('Bearer', '').trim();

        const validated = this.jwtService.verify(token, {
          secret: process.env.JWT_SECRET,
        });

        req.body._validated = validated;
      } catch (e) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
      }
      next();
    }
  }
}
