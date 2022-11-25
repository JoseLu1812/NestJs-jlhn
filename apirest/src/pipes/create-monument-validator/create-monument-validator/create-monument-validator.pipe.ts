import { ArgumentMetadata, Injectable,BadRequestException, PipeTransform } from '@nestjs/common';
import { ObjectSchema } from 'joi';
import { CreateMonumentoDto } from 'src/monumentos/dto/create-monumento.dto';

@Injectable()
export class CreateMonumentValidatorPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(createSchema: CreateMonumentoDto, metadata: ArgumentMetadata) {
    const {error} = this.schema.validate(createSchema);
    if (error){
      const errorMessage = 'Body request invalido';
      throw new BadRequestException({
        message: errorMessage,
        error: error,
      });
    }
    return createSchema;
  }
}
