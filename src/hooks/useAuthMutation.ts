import { signup } from '@/services/auth'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { useLocalStorage } from './useStorage'

type formControlType = {
    email: string
    password: string
}

type useAuthMutationProps = {
    action: 'SIGN_IN' | 'SIGN_UP'
    defaultValues?: formControlType
    onSuccess?: () => void
}
const formSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .messages({
            'string.email': 'Email không hợp lệ',
            'any.required': 'Vui lòng nhập email'
        }),
    password: Joi.string().min(6).max(50).required().messages({
        'string.min': 'Mật khẩu phải có ít nhất 6 ký tự',
        'string.max': 'Mật khẩu tối đa 50 ký tự',
        'any.required': 'Vui lòng nhập mật khẩu'
    })
})
export const useAuthMutation = ({
    action,
    defaultValues = { email: '', password: '' },
    onSuccess
}: useAuthMutationProps) => {
    const [, setUser] = useLocalStorage('user', null)
    const queryClient = useQueryClient()
    const { mutate, ...rest } = useMutation({
        mutationFn: async (user: any) => {
            switch (action) {
                case 'SIGN_IN':
                    return
                case 'SIGN_UP':
                    return await signup(user)
                default:
                    return null
            }
        },
        onSuccess: (data) => {
            setUser(data)
            onSuccess && onSuccess()
            queryClient.invalidateQueries({
                queryKey: ['user']
            })
        }
    })
    const form = useForm({
        resolver: joiResolver(formSchema),
        defaultValues
    })
    const onSubmit = (values: formControlType) => {
        console.log(values)
        mutate(values)
    }
    return {
        form,
        onSubmit,
        ...rest
    }
}
