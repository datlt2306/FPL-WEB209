import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/product'

const Add = () => {
    const { state, dispatch } = useContext(ProductContext)

    const [valueInput, setValueInput] = useState({})
    const onChange = (e: any) => {
        const target = e.target
        const name = target.name

        setValueInput({
            ...valueInput,
            [name]: target.value
        })
    }
    const onSubmit = async (e: any) => {
        e.preventDefault()
        try {
            const product = await (
                await fetch(`http://localhost:3000/products`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(valueInput)
                })
            ).json()
            // rerender
            dispatch({ type: 'ADD_PRODUCT', payload: product })
        } catch (error) {}
    }
    return (
        <div>
            <h2>Thêm sản phẩm</h2>
            <form onSubmit={onSubmit}>
                <input type='text' name='name' onInput={onChange} />
                <input type='number' name='price' onInput={onChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Add
