import React, { useState } from 'react'

type AddProps = {
    onAdd: (product: any) => void
}

const Add = ({ onAdd }: AddProps) => {
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
        onAdd(valueInput)
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
