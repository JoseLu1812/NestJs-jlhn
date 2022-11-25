import { MonumentosService } from './monumentos.service';
import { CreateMonumentoDto } from './dto/create-monumento.dto';
import { UpdateMonumentoDto } from './dto/update-monumento.dto';
export declare class MonumentosController {
    private readonly monumentosService;
    constructor(monumentosService: MonumentosService);
    create(createMonumentoDto: CreateMonumentoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMonumentoDto: UpdateMonumentoDto): string;
    remove(id: string): string;
}
