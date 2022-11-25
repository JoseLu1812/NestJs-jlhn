import { Module } from '@nestjs/common';
import { MonumentosService } from './monumentos.service';
import { MonumentosController } from './monumentos.controller';

@Module({
  controllers: [MonumentosController],
  providers: [MonumentosService]
})
export class MonumentosModule {}
