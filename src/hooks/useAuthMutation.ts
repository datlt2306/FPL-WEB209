import { formSigninSchema, formSignupSchema } from '@/common/schema'
import { signin, signup } from '@/services/auth'
import { joiResolver } from '@hookform/resolvers/joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { useLocalStorage } from './useStorage'

type formControlType = {
    name?: string
    email?: string
    password?: string
    confirmPassword?: string
}

type useAuthMutationProps = {
    action: 'SIGN_IN' | 'SIGN_UP'
    defaultValues?: formControlType
    onSuccess?: () => void
}

export const useAuthMutation = ({
    action,
    defaultValues = { name: "", email: '', password: '', confirmPassword: "" },
    onSuccess
}: useAuthMutationProps) => {
    const [, setUser] = useLocalStorage('user', null)
    const queryClient = useQueryClient()
    const { mutate, ...rest } = useMutation({
        mutationFn: async (user: any) => {
            switch (action) {
                case 'SIGN_IN':
                    return await signin(user)
                case 'SIGN_UP':
                    return await signup(user)
                default:
                    return null
            }
        },
        onSuccess: (data) => {
            console.log(data);
            setUser(data)
            onSuccess && onSuccess()
            queryClient.invalidateQueries({
                queryKey: ['user']
            })
        }
    })
    const form = useForm({
        resolver: joiResolver(action === 'SIGN_UP' ? formSignupSchema : formSigninSchema),
        defaultValues
    })
    const onSubmit: SubmitHandler<any> = (values) => {
        mutate(values)
    }
    return {
        form,
        onSubmit,
        ...rest
    }
}
