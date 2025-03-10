import Joi from "joi";

export const productSchema = Joi.object({
    name: Joi.string().required().min(3).max(100).messages({
        "string.empty": "Tên sản phẩm không được để trống",
        "string.min": "Tên sản phẩm phải có ít nhất 3 ký tự",
        "string.max": "Tên sản phẩm không được quá 100 ký tự",
    }),
    price: Joi.number().required().min(0).messages({
        "number.base": "Giá phải là số",
        "number.min": "Giá không được âm",
        "any.required": "Giá không được để trống",
    }),
    description: Joi.string().required().min(10).messages({
        "string.empty": "Mô tả không được để trống",
        "string.min": "Mô tả phải có ít nhất 10 ký tự",
    }),
    category: Joi.string().required().messages({
        "string.empty": "Danh mục không được để trống",
    }),
    stock: Joi.number().integer().min(0).required().messages({
        "number.base": "Số lượng phải là số nguyên",
        "number.min": "Số lượng không được âm",
        "any.required": "Số lượng không được để trống",
    }),
});
