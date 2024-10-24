import Joi from "joi";
export const cardResolver =Joi.object({
    cardNumber:Joi.string()
        .required()
        .max(16)
        .min(16),
    name:Joi.string()
        .pattern(/([a-zA-Z]{3,30}\s*)+/)
        .required(),
    cvv:Joi.number()
        .min(100)
        .max(999),
    monthAndYear:Joi.number()
        .min(1000)
        .max(9999)


})