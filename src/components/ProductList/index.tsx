import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { IProduct } from '../../interfaces/Product'

const ProductList = () => {
    const queryClient = useQueryClient()
    const [editingProductId, setEditingProductId] = useState<number | null>(null)
    const [editingProduct, setEditingProduct] = useState<IProduct | null>(null)
    const {
        data: products,
        isLoading,
        isError
    } = useQuery(['PRODUCT_KEY'], async () => {
        const response = await fetch(`http://localhost:3000/products`)
        const data = await response.json()
        return data
    })
    const mutation = useMutation({
        mutationFn: (product: IProduct) =>
            fetch(`http://localhost:3000/products/${product.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            }),
        onSuccess: () => {
            queryClient.invalidateQueries('PRODUCT_KEY')
            setEditingProductId(null)
        }
    })
    const onInput = (e: any) => {
        const { name, value } = e.target
        setEditingProduct(
            (prevEditingProduct) =>
                ({
                    ...prevEditingProduct,
                    [name]: value
                }) as IProduct
        )
    }
    const onSubmit = async (e: any) => {
        e.preventDefault()
        mutation.mutate(editingProduct as any)
    }
    const handleEditClick = (product: IProduct) => {
        setEditingProductId(product.id!)
        setEditingProduct(product)
    }

    if (isLoading) return <>Loading...</>
    if (isError) return <div>Error.</div>
    return (
        <>
            {products?.map((item: IProduct, index: number) => (
                <div key={index}>
                    {editingProductId === item.id ? (
                        <>
                            <form onSubmit={onSubmit}>
                                <input type='text' defaultValue={editingProduct?.name} name='name' onInput={onInput} />
                                <input
                                    type='text'
                                    defaultValue={editingProduct?.price}
                                    name='price'
                                    onInput={onInput}
                                />
                                <button>Save</button>
                            </form>
                        </>
                    ) : (
                        <>
                            {item.name} - {item.price}
                            <button onClick={() => handleEditClick(item)}>Edit</button>
                        </>
                    )}
                </div>
            ))}
        </>
    )
}
export default ProductList
