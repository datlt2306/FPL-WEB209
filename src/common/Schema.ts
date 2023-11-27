import Joi from "joi";

export const formSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .messages({
            'string.email': 'Email không hợp lệ',
            'any.required': 'Email không được để trống'
        }),
    password: Joi.string().min(6).max(32).required().messages({
        'string.min': 'Mật khẩu phải có ít nhất 6 kí tự',
        'string.max': 'Mật khẩu không được quá 32 kí tự',
        'any.required': 'Mật khẩu không được để trống'
    })
})