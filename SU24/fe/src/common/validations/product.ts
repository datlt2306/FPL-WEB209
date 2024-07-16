import Joi from "joi";

export const ProductJoiSchema = Joi.object({
    name: Joi.string().required().messages({
        "string.empty": "Tên sản phẩm không được để trống",
    }),
    price: Joi.number().required(),
    category: Joi.string(),
    gallery: Joi.array().items(Joi.string()),
    image: Joi.string(),
    description: Joi.string(),
    discount: Joi.number(),
    featured: Joi.boolean(),
    countInStock: Joi.number(),
});
