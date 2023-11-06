import React, { useContext, useState } from 'react'
import { IProduct } from '../interfaces/Product'
import { ProductContext } from '../context/Product'

const Edit = () => {
    const { onHandleEdit, product } = useContext(ProductContext)
    const [valueInput, setValueInput] = useState<IProduct | {}>({})

    const onHandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValueInput({
            ...valueInput,
            [name]: value
        })
    }
    const onSubmit = (e: any) => {
        e.preventDefault()
        onHandleEdit({ ...product, ...valueInput })
    }
    return (
        <div>
            <h2>Sửa sản phẩm</h2>
            <form onSubmit={onSubmit}>
                <input type='text' name='name' placeholder='Name' defaultValue={product.name} onInput={onHandleInput} />
                <input
                    type='number'
                    name='price'
                    placeholder='Price'
                    defaultValue={product.price}
                    onInput={onHandleInput}
                />
                <button>Thêm</button>
            </form>
        </div>
    )
}

export default Edit
