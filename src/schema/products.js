import Joi from "joi";

export const productSchema = Joi.object({
    name:Joi.string().required(),
    price:Joi.number().required(),
    description:Joi.string().required(),
    image:Joi.string().required(),
    category_Id: Joi.string()
    // size:Joi.array(),
    // color:Joi.array(),
    // quantity:Joi.number().required()
})