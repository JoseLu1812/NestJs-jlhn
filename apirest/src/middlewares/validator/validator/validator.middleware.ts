import { Injectable, NestMiddleware } from '@nestjs/common';
import { Monument } from 'src/monuments/monumentos.model';

@Injectable()
export class ValidatorMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const monument: Monument = req.body;
    if (!monument.country || !monument.city || !monument.city) {
      const errorMessage = 'invalid body request';
      console.log(`Error: $(errorMessage)`);
      return req.statusCode(400).send(errorMessage);
    }
    next();
  }
}
