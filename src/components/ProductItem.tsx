import { useState } from 'react'
import { IProduct } from '../interfaces/Product'
import { useMutation, useQueryClient } from 'react-query'
import { edit } from '../api/product'

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
                    <button onClick={() => setEditProductId(null)}>Thoát</button>
                </form>
            ) : (
                <>
                    {product.name} - {product.price} <button onClick={() => handleClick(product)}>Sửa</button>
                </>
            )}
        </div>
    )
}

export default ProductItem
