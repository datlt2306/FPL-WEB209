import { useProductQuery } from '@/hooks/useProductQuery'
import Joi from 'joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { joiResolver } from '@hookform/resolvers/joi'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { Input } from '../ui/input'
import { IProduct } from '@/interfaces/Product'
import { useEffect } from 'react'
import { Button } from '../ui/button'

type formControlType = {
    name: string
    price: number
}

const formSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number()
})

const ProductEdit = () => {
    const { id } = useParams()
    const { data, isLoading, isError } = useProductQuery(id ? +id : 0)
    const form = useForm<formControlType>({
        resolver: joiResolver(formSchema),
        defaultValues: {
            name: '',
            price: 0
        }
    })
    // useProductQuery là bất đồng bộ, nên biến data sẽ không có giá trị ngay lập tức
    // nên cần dùng useEffect với điều kiện data và form đã có giá trị thì mới reset form để set giá trị mặc định cho form
    useEffect(() => {
        if (data && form) {
            form.reset({
                name: (data as IProduct)?.name || '',
                price: (data as IProduct)?.price || 0
            })
        }
    }, [data, form])

    const onSubmit: SubmitHandler<formControlType> = (values) => {
        console.log(values)
    }
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error.</div>
    return (
        <div>
            <h2>Update sản phẩm</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={form.control}
                        name='price'
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )
                        }}
                    />
                    <Button className='mt-10' type='submit'>
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default ProductEdit
