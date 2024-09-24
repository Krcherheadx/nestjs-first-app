import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  signup(@Body() body: AuthDto) {
    console.log({
        dto:body,
      emailType: typeof body.email,
      passwordType: typeof body.password,
    });
    return {
      email: body.email,
      password: body.password,
    };
    // return this.authService.signup(body);
  }
  @Post('signin')
  signin() {
    return { name: 'هلا وغلا❤️ ' };
  }
}
