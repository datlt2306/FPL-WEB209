import React, { useState } from 'react'
import { IProduct } from './interfaces/Product'

type AddProps = {
    onAdd: (product: IProduct) => void
}

const Add = ({ onAdd }: AddProps) => {
    const [valueInput, setValueInput] = useState<IProduct>({ name: '', price: 0 })

    const onHandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValueInput({
            ...valueInput,
            [name]: value
        })
    }
    const onSubmit = (e: any) => {
        e.preventDefault()
        if (valueInput) {
            onAdd(valueInput)
        }
    }
    return (
        <div>
            {JSON.stringify(valueInput)}
            <form onSubmit={onSubmit}>
                <input type='text' name='name' placeholder='Name' onInput={onHandleInput} />
                <input type='number' name='price' placeholder='Price' onInput={onHandleInput} />
                <button>Thêm</button>
            </form>
        </div>
    )
}

export default Add
