import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
// import * as csurf from 'csurf';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as handlebars from 'hbs';
import * as fs from 'fs';

declare const module: any;

function registerComponents() {
  const dir = join(__dirname, '..', 'views', 'components');
  const filenames = fs.readdirSync(dir);
  filenames.forEach((filename: string) => {
    const matches = /^([^.]+).hbs$/.exec(filename);
    if (!matches) {
      return;
    }
    const name = matches[1];
    const template = fs.readFileSync(dir + '/' + filename, 'utf8');
    handlebars.registerPartial(name, template);
  });
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.enableCors();
  app.use(helmet());
  // app.use(csurf());
  registerComponents();
  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
