import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Render,
} from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/public.decorator';
import { ViewInterface } from './shared/interface/view.interface';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Public()
  @Get()
  @Render('index')
  index(): ViewInterface {
    return {
      title: 'Home Page',
      template: () => {
        return 'index';
      },
    };
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
