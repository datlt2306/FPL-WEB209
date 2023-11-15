import { useState } from 'react'
import { IProduct } from '../interfaces/Product'
import { useMutation, useQueryClient } from 'react-query'
import { edit } from '../api/product'
import { Button } from './ui/button'
import joi from 'joi'
import { useForm, SubmitHandler } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { Input } from './ui/input'

type ProductItemProps = {
    product: IProduct
}
type formInputType = {
    name: string
    price: number
}
const formAddSchema = joi.object({
    name: joi.string().required(),
    price: joi.number()
})

const ProductItem = ({ product }: ProductItemProps) => {
    const queryClient = useQueryClient()
    const [editProductId, setEditProductId] = useState<number | null>(null)
    const [editProduct, setEditProduct] = useState({} as IProduct)

    const form = useForm<formInputType>({
        resolver: joiResolver(formAddSchema),
        defaultValues: {
            name: '',
            price: 0
        }
    })
    const mutation = useMutation({
        mutationFn: (product: IProduct) => edit(product),
        onSuccess: () => {
            setEditProductId(null)
            setEditProduct({} as IProduct)
            queryClient.invalidateQueries({
                queryKey: ['PRODUCTS_KEY']
            })
        }
    })

    const onSubmit: SubmitHandler<formInputType> = (values) => {
        mutation.mutate({ ...values, id: editProduct.id! })
    }
    const handleClick = (product: IProduct) => {
        setEditProductId(product.id!)
        setEditProduct(product)
        form.reset({
            name: product.name,
            price: product.price
        })
    }
    return (
        <div>
            {editProductId === product.id ? (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
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
                        />
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
                        />
                        <Button type='submit'>Lưu</Button>
                    </form>
                </Form>
            ) : (
                <>
                    {product.name} - {product.price}{' '}
                    <Button variant='success' size='xl' onClick={() => handleClick(product)}>
                        Sửa
                    </Button>
                </>
            )}
        </div>
    )
}

export default ProductItem
