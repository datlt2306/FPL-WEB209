import { IUser } from '@/common/Type'
import { formSigninSchema, formSignupSchema } from '@/common/schema'
import { signin, signup } from '@/services/auth'
import { joiResolver } from '@hookform/resolvers/joi'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { useLocalStorage } from './useStorage'

type useAuthMutationProps = {
    action: 'SIGN_IN' | 'SIGN_UP'
    defaultValues?: IUser
    onSuccess?: () => void
}

const useAuthMutation = ({ action, defaultValues = { email: '', password: '' }, onSuccess }: useAuthMutationProps) => {
    const [, setUser] = useLocalStorage('user', {})
    const queryClient = useQueryClient()
    const { mutate, ...rest } = useMutation({
        mutationFn: async (user: IUser) => {
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

    const onSubmit = (user: IUser) => {
        mutate(user)
    }

    return {
        form,
        onSubmit,
        ...rest
    }
}
export default useAuthMutation
