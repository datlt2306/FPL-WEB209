import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { IProduct } from '../interfaces/Product'

const List = () => {
    const queryClient = useQueryClient()
    const [productEditId, setProductEditId] = useState(null as number | null)
    const [productEdit, setProductEdit] = useState({} as IProduct)
    const {
        data: products,
        isLoading,
        isError
    } = useQuery({
        queryKey: ['PRODUCT'],
        queryFn: async () => await (await fetch('http://localhost:3000/products')).json()
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
            setProductEditId(null)
            queryClient.invalidateQueries('PRODUCT')
        }
    })
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error...</div>

    const onChange = (e: any) => {
        const target = e.target
        const name = target.name
        setProductEdit({
            ...productEdit,
            [name]: target.value
        } as IProduct)
    }
    const onSubmit = async (e: any) => {
        e.preventDefault()
        mutation.mutate(productEdit)
    }

    const handleClick = (product: IProduct) => {
        setProductEditId(product.id)
        setProductEdit(product)
    }
    return (
        <div>
            {products?.map((product: any, index: any) => (
                <div key={index}>
                    {productEditId === product.id ? (
                        <form onSubmit={onSubmit}>
                            <input type='text' name='name' defaultValue={productEdit?.name} onChange={onChange} />
                            <input type='price' name='price' defaultValue={productEdit?.price} onChange={onChange} />
                            <button type='submit'>Lưu</button>
                        </form>
                    ) : (
                        <>
                            {product.name} - {product.price}
                            <button onClick={() => handleClick(product)}>Sửa</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}

export default List
// npm i react-query
// npm i @tanstack/react-query-devtools
