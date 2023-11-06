import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/product'

const Add = () => {
    const { onHandleAdd } = useContext(ProductContext)
    const [valueInput, setValueInput] = useState({})
    const onChange = (e: any) => {
        const target = e.target
        const name = target.name

        setValueInput({
            ...valueInput,
            [name]: target.value
        })
    }
    const onSubmit = (e: any) => {
        e.preventDefault()
        onHandleAdd(valueInput)
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
