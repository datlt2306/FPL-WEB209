import { joiResolver } from '@hookform/resolvers/joi'
import joi from 'joi'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { Input } from './ui/input'
import { useMutation, useQueryClient } from 'react-query'
import { addProduct } from '@/apis/product'
import { IProduct } from '@/interfaces/Product'
import { useToast } from '@/components/ui/use-toast'

type formControlDataType = {
    name: string
    price: number
}
// Định validate form sử dụng joi
const formSchema = joi.object({
    name: joi.string().min(2).max(50),
    price: joi.number()
})

const Add = () => {
    const queryClient = useQueryClient()
    const { toast } = useToast()

    const mutation = useMutation({
        mutationFn: (product: IProduct) => addProduct(product),
        onSuccess: () => {
            toast({
                variant: 'success',
                title: 'Chúc mừng thanh niên!!',
                description: 'Em đã thêm sản phẩm thành công'
            })
            queryClient.invalidateQueries({
                queryKey: ['PRODUCT']
            })
        }
    })
    const form = useForm({
        resolver: joiResolver(formSchema),
        defaultValues: {
            name: '',
            price: 0
        }
    })
    const onSubmit: SubmitHandler<formControlDataType> = (values) => {
        console.log(values)
        mutation.mutate(values)
    }
    return (
        <div className='border p-6'>
            <h2 className='text-xl font-bold'>Thêm sản phẩm</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>Tên sản phẩm</FormLabel>
                                <FormControl>
                                    <Input placeholder='Tên sản phẩm' {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    ></FormField>
                    <FormField
                        control={form.control}
                        name='price'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>Giá</FormLabel>
                                <FormControl>
                                    <Input placeholder='Giá sản phẩm' {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    ></FormField>
                    <Button type='submit'>Thêm</Button>
                </form>
            </Form>
        </div>
    )
}

export default Add
