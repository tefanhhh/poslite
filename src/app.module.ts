import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import 'dotenv/config';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
