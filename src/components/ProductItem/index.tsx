import React, { useState } from 'react'
import { IProduct } from '../../interfaces/Product'
import { useMutation, useQueryClient } from 'react-query'
import { editProduct } from '../../api/product'

type ProductItemProps = {
    item: IProduct
}

const ProductItem = ({ item }: ProductItemProps) => {
    const queryClient = useQueryClient()
    const [productEditId, setProductEditId] = useState<number | null>(null)
    const [productEdit, setProductEdit] = useState({} as IProduct)
    const mutation = useMutation({
        mutationFn: (product: IProduct) => editProduct(product),
        onSuccess: () => {
            setProductEditId(null)
            queryClient.invalidateQueries({
                queryKey: ['PRODUCT_KEY']
            })
        }
    })
    const onInput = (e: any) => {
        const { name, value } = e.target
        setProductEdit({
            ...productEdit,
            [name]: value
        })
    }
    const onSubmit = async (e: any) => {
        e.preventDefault()
        mutation.mutate(productEdit)
    }
    const handleClick = (item: IProduct) => {
        setProductEditId(item.id!)
        setProductEdit(item)
    }
    return (
        <div>
            {productEditId === item.id ? (
                <form onSubmit={onSubmit}>
                    <input type='text' name='name' defaultValue={productEdit?.name} onInput={onInput} />
                    <input type='text' name='price' defaultValue={productEdit?.price} onInput={onInput} />
                    <button>Lưu</button>
                    <button onClick={() => setProductEditId(null)}>Hủy</button>
                </form>
            ) : (
                <>
                    {item.name} - {item.price}
                    <button onClick={() => handleClick(item)}>Edit</button>
                </>
            )}
        </div>
    )
}

export default ProductItem
