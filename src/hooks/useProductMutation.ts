import { addProduct, deleteProduct, updateProduct } from '@/apis/product'
import { useToast } from '@/components/ui/use-toast'
import { IProduct } from '@/interfaces/Product'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
type FormProps = {
    action: 'ADD' | 'EDIT' | 'DELETE'
    defaultValues?: IProduct
    onSuccess?: () => void
}
type formControlDataType = {
    name: string
    price: number
}
// Định validate form sử dụng joi
const formSchema = Joi.object({
    name: Joi.string().min(2).max(50),
    price: Joi.number()
})
export const useProductMutation = ({ action, defaultValues = { name: '', price: 0 }, onSuccess }: FormProps) => {
    const queryClient = useQueryClient()
    const { toast } = useToast()
    const { mutate, ...rest } = useMutation({
        mutationFn: async (product: IProduct) => {
            switch (action) {
                case 'ADD':
                    return await addProduct(product)
                case 'EDIT':
                    return await updateProduct(product)
                case 'DELETE':
                    return await deleteProduct(product)
                default:
                    return null
            }
        },
        onSuccess: () => {
            toast({
                variant: 'success',
                title: 'Chúc mừng thanh niên!!',
                description: 'Em đã thêm sản phẩm thành công'
            })
            queryClient.invalidateQueries({
                queryKey: ['PRODUCT']
            })
            onSuccess && onSuccess()
        }
    })
    const form = useForm({
        resolver: joiResolver(formSchema),
        defaultValues
    })
    const onSubmit: SubmitHandler<formControlDataType> = (values) => {
        console.log(values);
        mutate(values)
    }
    return {
        form,
        onSubmit,
        ...rest
    }
}
