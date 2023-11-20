import { updateProduct } from '@/apis/product'
import { IProduct } from '@/interfaces/Product'
import { joiResolver } from '@hookform/resolvers/joi'
import joi from 'joi'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { Input } from './ui/input'
import { useProductMutation } from '@/hooks/useProductMutation'
import { useToast } from './ui/use-toast'

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
    const { toast } = useToast()
    const [productEditId, setProductEditId] = useState(null as number | null)
    const [productEdit, setProductEdit] = useState({} as IProduct)
    const { form, onSubmit } = useProductMutation({
        action: 'UPDATE',
        callbackFn: () => {
            setProductEditId(null)
            toast({
                variant: 'destructive',
                title: 'Chúc mừng thanh niên!!',
                description: 'Em đã cập nhật sản phẩm thành công'
            })
        }
    })
    const handleClick = (product: IProduct) => {
        setProductEditId(product.id!)
        setProductEdit(product)
        form.reset({
            name: product.name || '',
            price: product.price || 0
        })
    }
    const handleOnSubmit = (values: IProduct) => {
        onSubmit({ ...productEdit, ...values })
    }
    return (
        <div>
            {productEditId === product.id ? (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleOnSubmit)} className='space-y-4'>
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
