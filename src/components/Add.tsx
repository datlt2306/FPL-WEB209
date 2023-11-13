import { joiResolver } from '@hookform/resolvers/joi'
import joi from 'joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { add } from '../api/product'
import { IProduct } from '../interfaces/Product'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { Input } from './ui/input'

type formInputType = {
    name: string
    price: number
}

const formAddSchema = joi.object({
    name: joi.string().required(),
    price: joi.number()
})
const Add = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: (product: IProduct) => add(product),
        onSuccess: () => {
            queryClient.invalidateQueries('PRODUCTS_KEY')
        }
    })
    const form = useForm<formInputType>({
        resolver: joiResolver(formAddSchema),
        defaultValues: {
            name: '',
            price: 0
        }
    })

    const onSubmit: SubmitHandler<formInputType> = (values) => {
        mutation.mutate(values)
    }
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 p-10'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>Tên sản phẩm</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='Tên sản phẩm' />
                                </FormControl>
                            </FormItem>
                        )}
                    ></FormField>
                    <FormField
                        control={form.control}
                        name='price'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>Giá sản phẩm</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='Giá sản phẩm' />
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
