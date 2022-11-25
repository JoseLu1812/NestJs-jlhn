"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMonumentSchema = void 0;
const Joi = require("joi");
exports.CreateMonumentSchema = Joi.object().keys({
    id: Joi.number().required(),
    name: Joi.string().required(),
    code: Joi.string(),
    country: Joi.string(),
    city: Joi.string(),
    lat: Joi.number(),
    lon: Joi.number(),
    desc: Joi.string(),
    url: Joi.string(),
});
//# sourceMappingURL=createMonument.schema.js.map