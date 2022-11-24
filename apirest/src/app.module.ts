import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonumentsController } from './monuments/monuments.controller';
import { MonumentsService } from './monuments/monuments.service';
import { Monuments } from './monuments/monuments';
import { MonumentsModule } from './monuments/monuments.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [MonumentsModule, CategoriasModule],
  controllers: [AppController, MonumentsController],
  providers: [AppService, MonumentsService],
})
export class AppModule implements nest {
  configure(consumer: MiddlewareMo)
}
