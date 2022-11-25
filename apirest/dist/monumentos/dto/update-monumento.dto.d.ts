import { CreateMonumentoDto } from './create-monumento.dto';
declare const UpdateMonumentoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateMonumentoDto>>;
export declare class UpdateMonumentoDto extends UpdateMonumentoDto_base {
    id: number;
    name: string;
    code: string;
    country: string;
    city: string;
    lat: number;
    lon: number;
    desc: string;
    url: string;
}
export {};
