"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonumentosService = void 0;
const common_1 = require("@nestjs/common");
let MonumentosService = class MonumentosService {
    create(createMonumentoDto) {
        if (createMonumentoDto) {
            return 'Monumento creado satisfactoriamente';
        }
        throw new common_1.HttpException({ error: 'error de creacion', status: common_1.HttpStatus.NOT_ACCEPTABLE }, common_1.HttpStatus.NOT_ACCEPTABLE);
    }
    findAll() {
        return `Monumentos encontrados con exito`;
    }
    findOne(id) {
        if (id === 1) {
            return `Monumento encontrado`;
        }
        throw new common_1.HttpException({
            status: common_1.HttpStatus.NOT_FOUND,
            error: 'Usuario no encontrado'
        }, common_1.HttpStatus.NOT_FOUND);
    }
    update(id, updateMonumentoDto) {
        if (id === 1 && updateMonumentoDto) {
            return 'Monumento actualizado correctamente!';
        }
        throw new common_1.HttpException('El monumento no se ha actualizado correctamente', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
    remove(id) {
        if (id === 1) {
            return `Monumento con id: ${id}, eliminado correctamente`;
        }
    }
};
MonumentosService = __decorate([
    (0, common_1.Injectable)()
], MonumentosService);
exports.MonumentosService = MonumentosService;
//# sourceMappingURL=monumentos.service.js.map