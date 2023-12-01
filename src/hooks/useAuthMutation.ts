import { formSchema } from '@/common/Schema'
import { IUser } from '@/common/Type'
import { signin, signup } from '@/services/auth'
import { joiResolver } from '@hookform/resolvers/joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { useLocalStorage } from './useStorage'

type FormAuthType = {
    email: string
    password: string
}

type useAuthMutationProps = {
    action: 'SIGN_IN' | 'SIGN_UP'
    defaultValues?: FormAuthType
    onSuccess?: () => void
}

const useAuthMutation = ({ action, defaultValues = { email: '', password: '' }, onSuccess }: useAuthMutationProps) => {
    const queryClient = useQueryClient()
    const [, setUser] = useLocalStorage('user', {})
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
            queryClient.invalidateQueries({
                queryKey: ['auth']
            })
            onSuccess && onSuccess()
            // Luu token vao localstorage
            setUser(data)
        }
    })

    const form = useForm<FormAuthType>({
        resolver: joiResolver(formSchema),
        defaultValues
    })

    const onSubmit: SubmitHandler<FormAuthType> = (values) => {
        mutate(values)
    }

    return {
        form,
        onSubmit,
        ...rest
    }
}

export default useAuthMutation
