import { Module } from '@nestjs/common';
import { MonumentsController } from './monuments.controller';
import { MonumentsService } from './monuments.service';

@Module({
    imports: [],
    controllers: [MonumentsController],
    providers: [MonumentsService]
})
export class MonumentsModule {}
