import { Controller, Get, Render } from '@nestjs/common';
import { Public } from 'src/auth/public.decorator';
import { ViewInterface } from 'src/shared/interface/view.interface';

@Controller('login')
export class LoginController {
  @Public()
  @Get()
  @Render('index')
  index(): ViewInterface {
    return {
      title: 'Login Pages',
      template: () => {
        return 'login';
      },
    };
  }
}
