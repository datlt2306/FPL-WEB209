import React, { useContext, useState } from 'react'
import { IProduct } from '../../interfaces/Product'
import { ProductContext } from '../../context/product'

const ProductAdd = () => {
    const { state, dispatch } = useContext(ProductContext)
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

        fetch(`http://localhost:3000/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(valueInput)
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: 'ADD_PRODUCT', payload: data })
            })
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
