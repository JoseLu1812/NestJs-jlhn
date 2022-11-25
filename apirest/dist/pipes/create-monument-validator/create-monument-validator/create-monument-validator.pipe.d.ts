import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { ObjectSchema } from 'joi';
import { CreateMonumentoDto } from 'src/monumentos/dto/create-monumento.dto';
export declare class CreateMonumentValidatorPipe implements PipeTransform {
    private schema;
    constructor(schema: ObjectSchema);
    transform(createSchema: CreateMonumentoDto, metadata: ArgumentMetadata): CreateMonumentoDto;
}
