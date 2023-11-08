import React, { useContext, useEffect, useState } from 'react'
import { IProduct } from '../interfaces/Product'
import { ProductContext } from '../context/product'

const Edit = () => {
    const { state, dispatch } = useContext(ProductContext)

    const [valueInput, setValueInput] = useState({})
    const onChange = (e: any) => {
        const target = e.target
        const name = target.name
        setValueInput({
            ...valueInput,
            [name]: target.value
        })

        // {name: "Product A update"}
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
                    body: JSON.stringify({ ...state.product, ...valueInput })
                })
            ).json()
            // rerender
            dispatch({
                type: 'EDIT_PRODUCT',
                payload: newProduct
            })
        } catch (error) {}
    }
    return (
        <div>
            {JSON.stringify(state.product)}
            <h2>Sửa sản phẩm</h2>
            <form onSubmit={onSubmit}>
                <input type='text' name='name' defaultValue={state.product.name} onChange={onChange} />
                <input type='number' name='price' defaultValue={state.product.price} onChange={onChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Edit
