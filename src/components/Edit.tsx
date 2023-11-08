import React, { useContext, useState } from 'react'
import { IProduct } from '../interfaces/Product'
import { ProductContext } from '../context/Product'

const Edit = () => {
    const { state, dispatch } = useContext(ProductContext)
    const [valueInput, setValueInput] = useState<IProduct | {}>({})

    const onHandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValueInput({
            ...valueInput,
            [name]: value
        })
    }
    const onSubmit = async (e: any) => {
        e.preventDefault()
        try {
            const newProduct = await (
                await fetch(`http://localhost:3000/products/${state.product.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(valueInput)
                })
            ).json()
            // Rerender
            dispatch({ type: 'UPDATE_PRODUCT', payload: newProduct })
        } catch (error) {}
    }
    return (
        <div>
            <h2>Sửa sản phẩm</h2>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    defaultValue={state.product.name}
                    onInput={onHandleInput}
                />
                <input
                    type='number'
                    name='price'
                    placeholder='Price'
                    defaultValue={state.product.price}
                    onInput={onHandleInput}
                />
                <button>Thêm</button>
            </form>
        </div>
    )
}

export default Edit
