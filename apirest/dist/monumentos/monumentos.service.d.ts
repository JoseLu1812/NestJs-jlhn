import { CreateMonumentoDto } from './dto/create-monumento.dto';
import { UpdateMonumentoDto } from './dto/update-monumento.dto';
export declare class MonumentosService {
    create(createMonumentoDto: CreateMonumentoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMonumentoDto: UpdateMonumentoDto): string;
    remove(id: number): string;
}
