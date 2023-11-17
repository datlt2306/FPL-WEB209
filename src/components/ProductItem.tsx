import { useProductMutation } from '@/hooks/useProductMutation'
import { IProduct } from '@/interfaces/Product'
import { useState } from 'react'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { Input } from './ui/input'

type ProductItemProps = {
    product: IProduct
}
const ProductItem = ({ product }: ProductItemProps) => {
    const [productEditId, setProductEditId] = useState(null as number | null)
    const [editProduct, setProductEdit] = useState({} as IProduct)
    const { form, onSubmit } = useProductMutation({
        action: 'EDIT',
        onSuccess: () => {
            setProductEditId(null)
        }
    })

    const handleOnSubmit = (values: IProduct) => {
        onSubmit({ ...editProduct, ...values })
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
