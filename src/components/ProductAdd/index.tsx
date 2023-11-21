import { joiResolver } from '@hookform/resolvers/joi'
import { AiFillPlusSquare } from 'react-icons/ai'
import { addProduct } from '@/api/product'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { IProduct } from '@/interfaces/Product'
import joi from 'joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { useToast } from '../ui/use-toast'
import { useProductMutation } from '@/hooks/useProductMutation'
import { useNavigate } from 'react-router-dom'

type FormControlType = {
    name: string
    price: number
}
const formSchema = joi.object({
    name: joi.string().required(),
    price: joi.number()
})
const ProductAdd = () => {
    // const queryClient = useQueryClient()
    // const { toast } = useToast()

    // const form = useForm<FormControlType>({
    //     resolver: joiResolver(formSchema),
    //     defaultValues: {
    //         name: '',
    //         price: 0
    //     }
    // })
    // const mutation = useMutation({
    //     mutationFn: (product: IProduct) => addProduct(product),
    //     onSuccess: () => {
    //         toast({
    //             variant: 'success',
    //             title: 'Chúc mừng bạn!',
    //             description: 'Bạn đã thêm sản phẩm thành công'
    //         })
    //         form.reset()
    //         queryClient.invalidateQueries('PRODUCT_KEY')
    //     }
    // })

    // const onSubmit: SubmitHandler<FormControlType> = (data) => {
    //     mutation.mutate(data)
    // }

    const { toast } = useToast()
    const navigate = useNavigate()
    const { form, onSubmit } = useProductMutation({
        action: 'CREATE',
        onSuccess: () => {
            toast({
                variant: 'success',
                title: 'Chúc mừng bạn!',
                description: 'Bạn đã thêm sản phẩm thành công'
            })
            form.reset()
            setTimeout(() => {
                navigate('/product')
            }, 2000)
        }
    })
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tên</FormLabel>
                            <FormControl>
                                <Input type='text' placeholder='Tên sản phẩm' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='price'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Giá</FormLabel>
                            <FormControl>
                                <Input type='number' placeholder='Giá sản phẩm' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type='submit' variant='destructive'>
                    <AiFillPlusSquare />
                    Thêm sản phẩm
                </Button>
            </form>
        </Form>
    )
}

export default ProductAdd
