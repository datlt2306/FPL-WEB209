import { addProduct, deleteProduct, editProduct } from '@/services/product'
import { useToast } from '@/components/ui/use-toast'
import { IProduct } from '@/common/Type'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
type formInputType = {
    id?: number
    name: string
    price: number
}
type useProductMutationProps = {
    action: 'ADD' | 'EDIT' | 'DELETE'
    defaultValues?: IProduct
    onSuccess?: () => void
}
const formAddSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number()
})
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
                case 'EDIT':
                    return await editProduct(product)
                case 'DELETE':
                    return await deleteProduct(product.id!)
                default:
                    return null
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('PRODUCTS_KEY')
            onSuccess && onSuccess()
        }
    })
    const form = useForm<formInputType>({
        resolver: joiResolver(formAddSchema),
        defaultValues
    })

    const onSubmit: SubmitHandler<formInputType> = (values) => {
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
