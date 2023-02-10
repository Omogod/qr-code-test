import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { QRController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, QRController],
  providers: [AppService],
})
export class AppModule {}
