import { addProduct, deleteProduct, updateProduct } from '@/apis/product'
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
    onSuccess?: () => void
}

export const useProductMutation = ({
    action,
    defaultValues = { name: '', price: 0 },
    onSuccess
}: useProductMutationProps) => {
    const queryClient = useQueryClient()

    const { mutate, ...rest } = useMutation({
        mutationFn: async (product: IProduct) => {
            switch (action) {
                case 'ADD':
                    return await addProduct(product)
                case 'UPDATE':
                    return await updateProduct(product)
                case 'DELETE':
                    return await deleteProduct(product)
                default:
                    return null
            }
        },
        onSuccess: () => {
            onSuccess && onSuccess()
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
    const onRemove = (product: IProduct) => {
        mutate(product)
    }
    return {
        form,
        onSubmit,
        onRemove,
        ...rest
    }
}
