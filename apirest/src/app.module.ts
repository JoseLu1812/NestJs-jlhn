import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonumentosModule } from './monumentos/monumentos.module';

@Module({
  imports: [MonumentosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
