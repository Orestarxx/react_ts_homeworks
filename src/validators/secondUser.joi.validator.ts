import Joi from "joi";

export const secondUserValidator = Joi.object({
name: Joi
    .string()
    .required()
    // .pattern(/([a-zA-Z]{3,30}\s*)+/)
    .messages({
        "any.required":'this field can`t be empty',
        "object.regex":'you don`t much to pattern'
    }),
    username: Joi
        .string()
        .required(),
    email: Joi
        .string()
        .required(),
    phone: Joi
        .string()
        .required(),
    website: Joi
        .string()
        .required()
})