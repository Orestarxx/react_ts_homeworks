import Joi from "joi";

export const userValidator = Joi.object({
    userName: Joi
        .string()
        .required()
        .pattern(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/)
        .messages({
            "any.required":'this field can`t be empty',
            "string.pattern.base":'you don`t much to pattern'
        }),
    name: Joi
        .string()
        .required()
        .pattern(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/)
        .messages({
            "any.required":'this field can`t be empty',
            "string.pattern.base":'you don`t much to pattern'
        }),
    email: Joi
        .string()
        .required()
        .pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
        .messages({
            "any.required":'this field can`t be empty',
            "string.pattern.base":'you don`t much to pattern'
        }),
    street: Joi
        .string()
        .required()
        .pattern(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/)
        .messages({
            "any.required":'this field can`t be empty',
            "string.pattern.base":'you don`t much to pattern'
        }),
    city: Joi
        .string()
        .required()
        .pattern(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/)
        .messages({
            "any.required":'this field can`t be empty',
            "string.pattern.base":'you don`t much to pattern'
        }),
    phone: Joi
        .string()
        .required()
        .pattern(/^(?:\+38)?(?:\(044\)[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[0-9]{7})$/)
        .messages({
            "any.required":'this field can`t be empty',
            "string.pattern.base":'you don`t much to pattern'
        })
})