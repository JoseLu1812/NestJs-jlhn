import * as Joi from "joi";

export const CreateMonumentSchema: Joi.ObjectSchema = Joi.object().keys({

    id: Joi.number().required(),
    name: Joi.string().required(),
    code: Joi.string(),
    country: Joi.string(),
    city: Joi.string(),
    lat: Joi.number(),
    lon: Joi.number(),
    desc: Joi.string(),
    url: Joi.string(),
})