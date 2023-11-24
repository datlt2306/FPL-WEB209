import { useProductMutation } from '@/hooks/useProductMutation'
import joi from 'joi'
import { useState } from 'react'
import { IProduct } from '../../../common/Type'
import { Button } from '../../../components/ui/button'
import { Form, FormControl, FormField, FormItem } from '../../../components/ui/form'
import { Input } from '../../../components/ui/input'

type ProductItemProps = {
    product: IProduct
}
const ProductItem = ({ product }: ProductItemProps) => {
    const [editProductId, setEditProductId] = useState<number | null>(null)
    const [editProduct, setEditProduct] = useState({} as IProduct)
    const { form, onSubmit } = useProductMutation({
        action: 'EDIT',
        onSuccess: () => {
            setEditProductId(null)
        }
    })
    const handleOnSubmit = (values: IProduct) => {
        onSubmit({ ...values, id: editProduct.id! })
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
                    <form onSubmit={form.handleSubmit(handleOnSubmit)}>
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
