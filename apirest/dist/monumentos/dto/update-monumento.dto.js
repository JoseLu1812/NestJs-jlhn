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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMonumentoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_monumento_dto_1 = require("./create-monumento.dto");
const class_validator_1 = require("class-validator");
class UpdateMonumentoDto extends (0, mapped_types_1.PartialType)(create_monumento_dto_1.CreateMonumentoDto) {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateMonumentoDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateMonumentoDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'The country Code must be a string.'
    }),
    __metadata("design:type", String)
], UpdateMonumentoDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'The country name must be a string'
    }),
    __metadata("design:type", String)
], UpdateMonumentoDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'The city name must be a string'
    }),
    __metadata("design:type", String)
], UpdateMonumentoDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsLatitude)({
        message: 'The latitud must be like a latitude number'
    }),
    __metadata("design:type", Number)
], UpdateMonumentoDto.prototype, "lat", void 0);
__decorate([
    (0, class_validator_1.IsLongitude)({
        message: 'The longitude must be like a longitude number'
    }),
    __metadata("design:type", Number)
], UpdateMonumentoDto.prototype, "lon", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'The description must be a string'
    }),
    (0, class_validator_1.Max)(500, {
        message: 'The description has the maximun size of 500 values'
    }),
    __metadata("design:type", String)
], UpdateMonumentoDto.prototype, "desc", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'The url path must be a string'
    }),
    __metadata("design:type", String)
], UpdateMonumentoDto.prototype, "url", void 0);
exports.UpdateMonumentoDto = UpdateMonumentoDto;
//# sourceMappingURL=update-monumento.dto.js.map