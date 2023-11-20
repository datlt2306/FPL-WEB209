import { addProduct, updateProduct } from '@/apis/product'
import { useToast } from '@/components/ui/use-toast'
import { IProduct } from '@/interfaces/Product'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
type formControlDataType = {
    name: string
    price: number
}
// Định validate form sử dụng joi
const formSchema = Joi.object({
    name: Joi.string().min(2).max(50),
    price: Joi.number()
})

type useProductMutationProps = {
    action: 'ADD' | 'UPDATE' | 'DELETE'
    defaultValues?: IProduct
    callbackFn?: () => void
}

export const useProductMutation = ({
    action,
    defaultValues = { name: '', price: 0 },
    callbackFn
}: useProductMutationProps) => {
    const queryClient = useQueryClient()

    const { mutate, ...rest } = useMutation({
        mutationFn: async (product: IProduct) => {
            switch (action) {
                case 'ADD':
                    await addProduct(product)
                    return
                case 'UPDATE':
                    await updateProduct(product)
                    return
                case 'DELETE':
                // deleteProduct(product)
                default:
                    return null
            }
        },
        onSuccess: () => {
            callbackFn && callbackFn()
            queryClient.invalidateQueries({
                queryKey: ['PRODUCT']
            })
        }
    })
    const form = useForm({
        resolver: joiResolver(formSchema),
        defaultValues
    })
    const onSubmit: SubmitHandler<formControlDataType> = (values) => {
        console.log(values)
        mutate(values)
    }
    return {
        form,
        onSubmit,
        ...rest
    }
}
