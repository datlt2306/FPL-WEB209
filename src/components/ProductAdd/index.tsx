import React, { useState } from 'react'
import { IProduct } from '../../interfaces/Product'

type Props = {
    onAdd: (product: IProduct) => void
}

const ProductAdd = ({ onAdd }: Props) => {
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
    const onSubmit = (e: any) => {
        e.preventDefault()
        onAdd(valueInput)
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
