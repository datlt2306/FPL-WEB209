import Joi from 'joi'

export const formSignupSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .messages({
            'string.email': 'Email không hợp lệ',
            'any.required': 'Email không được để trống'
        }),
    password: Joi.string().required().messages({
        'any.required': 'Mật khẩu không được để trống'
    })
})
