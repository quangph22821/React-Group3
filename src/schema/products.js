import Joi from "joi";

export const productSchema = Joi.object({
    title:Joi.string().required(),
    extract:Joi.string().required(),
    thumbnail:Joi.string().required(),
    categoryId: Joi.string().required(),
})