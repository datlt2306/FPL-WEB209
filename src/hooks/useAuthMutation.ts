import { formSchema } from '@/common/Schema'
import { IUser } from '@/common/Type'
import { signup } from '@/services/auth'
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
                    // call api signin
                    return
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
            setUser(data);
            // Luu token vao localstorage
        }
    })

    const form = useForm<FormAuthType>({
        resolver: joiResolver(formSchema),
        defaultValues
    })

    const onSubmit: SubmitHandler<FormAuthType> = (values) => {
        console.log({ values })
    }

    return {
        form,
        onSubmit,
        ...rest
    }
}

export default useAuthMutation
