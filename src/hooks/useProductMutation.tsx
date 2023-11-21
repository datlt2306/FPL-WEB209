import { addProduct, deleteProduct, editProduct } from '@/api/product'
import { IProduct } from '@/interfaces/Product'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

type FormControlType = {
    name: string
    price: number
}

const formSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required()
})
type useProductMutationProps = {
    action: 'CREATE' | 'UPDATE' | 'DELETE'
    defaultValues?: IProduct
    onSuccess?: () => void
}
export const useProductMutation = ({
    action,
    defaultValues = { name: '', price: 0 },
    onSuccess
}: useProductMutationProps) => {
    const queryClient = useQueryClient()

    const form = useForm<FormControlType>({
        resolver: joiResolver(formSchema),
        defaultValues
    })
    const { mutate, ...rest } = useMutation({
        mutationFn: async (product: IProduct) => {
            switch (action) {
                case 'CREATE':
                    return await addProduct(product)
                case 'UPDATE':
                    return await editProduct(product)
                case 'DELETE':
                    return await deleteProduct(product.id!)
                default:
                    return null
            }
        },
        onSuccess: () => {
            // thêm | cập nhật thành công
            queryClient.invalidateQueries({
                queryKey: ['PRODUCT_KEY']
            })
            onSuccess && onSuccess()
        }
    })
    const onSubmit: SubmitHandler<FormControlType> = (values) => {
        mutate(values as IProduct)
    }

    return {
        form,
        onSubmit,
        ...rest
    }
}
