import React, { useEffect, useState } from 'react'
import { IProduct } from '../interfaces/Product'

type EditProps = {
    product: IProduct
    onEdit: (product: any) => void
}

const Edit = ({ product, onEdit }: EditProps) => {
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
    const onSubmit = (e: any) => {
        e.preventDefault()
        // console.log({ ...product, ...valueInput })
        onEdit({ ...product, ...valueInput })
    }
    return (
        <div>
            {JSON.stringify(valueInput)}
            <h2>Sửa sản phẩm</h2>
            <form onSubmit={onSubmit}>
                <input type='text' name='name' defaultValue={product.name} onChange={onChange} />
                <input type='number' name='price' defaultValue={product.price} onChange={onChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Edit
