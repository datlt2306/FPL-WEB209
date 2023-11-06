import React, { useState } from 'react'
import { IProduct } from '../interfaces/Product'

type EditProps = {
    product: IProduct
    onEdit: (product: IProduct) => void
}

const Edit = ({ onEdit, product }: EditProps) => {
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
        onEdit({ ...product, ...valueInput })
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
