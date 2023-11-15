import { updateProduct } from '@/apis/product'
import { IProduct } from '@/interfaces/Product'
import { joiResolver } from '@hookform/resolvers/joi'
import joi from 'joi'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { Input } from './ui/input'

type ProductItemProps = {
    product: IProduct
}
type formControlDataType = {
    name: string
    price: number
}
const formSchema = joi.object({
    name: joi.string().min(2).max(50),
    price: joi.number()
})

const ProductItem = ({ product }: ProductItemProps) => {
    // cho phép truy cập tất cả các query
    const queryClient = useQueryClient()
    // khai báo 2 state: lưu id sp, lưu sản phẩm

    const [productEditId, setProductEditId] = useState(null as number | null)
    const [productEdit, setProductEdit] = useState({} as IProduct)
    const mutation = useMutation({
        mutationFn: (product: IProduct) => updateProduct(product),
        onSuccess: () => {
            setProductEditId(null)
            queryClient.invalidateQueries({
                queryKey: ['PRODUCT']
            })
        }
    })

    const form = useForm({
        resolver: joiResolver(formSchema),
        defaultValues: {
            name: productEdit?.name || '',
            price: productEdit?.price || 0
        }
    })
    const onSubmit: SubmitHandler<formControlDataType> = (values) => {
        console.log('values', values)
        mutation.mutate({ ...values, id: productEditId! })
    }
    const handleClick = (product: IProduct) => {
        setProductEditId(product.id!)
        setProductEdit(product)
        form.reset({
            name: product.name || '',
            price: product.price || 0
        })
    }
    return (
        <div>
            {productEditId === product.id ? (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
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
                                    <FormControl>
                                        <Input placeholder='Giá sản phẩm' {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        ></FormField>
                        <button type='submit'>Lưu</button>
                    </form>
                </Form>
            ) : (
                <>
                    {product.name} - {product.price}
                    <button onClick={() => handleClick(product)}>Sửa</button>
                </>
            )}
        </div>
    )
}

export default ProductItem
