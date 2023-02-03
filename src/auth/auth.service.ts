import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(body: any) {
    const user_id = body.user_id;
    if (!user_id) {
      throw new HttpException('Login failed', HttpStatus.BAD_REQUEST);
    }
    const payLoad = { user_id };
    const token = this.jwtService.sign(payLoad, {
      secret: process.env.JWT_SECRET,
    });
    return { access_token: token };
  }
}
