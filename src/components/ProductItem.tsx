import { useState } from 'react'
import { IProduct } from '../interfaces/Product'
import { useMutation, useQueryClient } from 'react-query'
import { edit } from '../api/product'
import { Button } from './ui/button'

type ProductItemProps = {
    product: IProduct
}

const ProductItem = ({ product }: ProductItemProps) => {
    const queryClient = useQueryClient()
    const [editProductId, setEditProductId] = useState<number | null>(null)
    const [editProduct, setEditProduct] = useState({} as IProduct)
    const mutation = useMutation({
        mutationFn: (product: IProduct) => edit(product),
        onSuccess: () => {
            setEditProductId(null)
            queryClient.invalidateQueries({
                queryKey: ['PRODUCTS_KEY']
            })
        }
    })
    const handleClick = (product: IProduct) => {
        setEditProductId(product.id!)
        setEditProduct(product)
    }

    const onChange = (e: any) => {
        const { name, value } = e.target
        // computed property name
        setEditProduct((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const onSubmit = (e: any) => {
        e.preventDefault()
        mutation.mutate(editProduct)
    }
    return (
        <div>
            {editProductId === product.id ? (
                <form onSubmit={onSubmit}>
                    <input type='text' name='name' defaultValue={editProduct?.name} onChange={onChange} />
                    <input type='text' name='price' defaultValue={editProduct?.price} onChange={onChange} />
                    <button>Cập nhật</button>
                    <Button variant='default' onClick={() => setEditProductId(null)}>
                        Thoát
                    </Button>
                </form>
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
