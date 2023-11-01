import React, { useState } from 'react'

type AddProps = {
    onAdd: (product: any) => void
}

const Add = ({ onAdd }: AddProps) => {
    const [value, setValue] = useState({})
    const onChange = (e: any) => {
        const target = e.target
        const name = target.name

        setValue({
            ...value,
            [name]: target.value
        })
    }
    const onSubmit = (e: any) => {
        e.preventDefault()
        onAdd(value)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' name='name' onChange={onChange} />
                <input type='number' name='price' onChange={onChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Add
