import React, { useContext, useState } from 'react'
import { IProduct } from '../../interfaces/Product'
import { ProductContext } from '../../context/product'
import { useMutation, useQueryClient } from 'react-query'

const ProductAdd = () => {
    const queryClient = useQueryClient()
    // const { state, dispatch } = useContext(ProductContext)

    const mutation = useMutation({
        mutationFn: (product) =>
            fetch(`http://localhost:3000/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            }),
        onSuccess: () => queryClient.invalidateQueries('PRODUCT_KEY')
    })
    const [valueInput, setValueInput] = useState<IProduct>({
        name: '',
        price: 0
    })

    const onInput = (e: any) => {
        const { name, value } = e.target
        setValueInput({
            ...valueInput,
            [name]: value
        })
    }
    const onSubmit = async (e: any) => {
        e.preventDefault()
        mutation.mutate(valueInput as any)
    }
    return (
        <form onSubmit={onSubmit}>
            {JSON.stringify(valueInput)}
            <h2>Thêm sản phẩm</h2>
            <input type='text' name='name' placeholder='Tên' onInput={onInput} />
            <input type='number' name='price' placeholder='Giá' onInput={onInput} />
            <button>Thêm</button>
        </form>
    )
}

export default ProductAdd
