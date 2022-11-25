"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonumentosController = void 0;
const common_1 = require("@nestjs/common");
const monumentos_service_1 = require("./monumentos.service");
const create_monumento_dto_1 = require("./dto/create-monumento.dto");
const update_monumento_dto_1 = require("./dto/update-monumento.dto");
let MonumentosController = class MonumentosController {
    constructor(monumentosService) {
        this.monumentosService = monumentosService;
    }
    create(createMonumentoDto) {
        return this.monumentosService.create(createMonumentoDto);
    }
    findAll() {
        return this.monumentosService.findAll();
    }
    findOne(id) {
        console.log(typeof id);
        return this.monumentosService.findOne(+id);
    }
    update(id, updateMonumentoDto) {
        return this.monumentosService.update(+id, updateMonumentoDto);
    }
    remove(id) {
        return this.monumentosService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_monumento_dto_1.CreateMonumentoDto]),
    __metadata("design:returntype", void 0)
], MonumentosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MonumentosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MonumentosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_monumento_dto_1.UpdateMonumentoDto]),
    __metadata("design:returntype", void 0)
], MonumentosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MonumentosController.prototype, "remove", null);
MonumentosController = __decorate([
    (0, common_1.Controller)('monumentos'),
    __metadata("design:paramtypes", [monumentos_service_1.MonumentosService])
], MonumentosController);
exports.MonumentosController = MonumentosController;
//# sourceMappingURL=monumentos.controller.js.map