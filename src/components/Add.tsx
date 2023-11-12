import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/product'
import { useMutation, useQueryClient } from 'react-query'

const Add = () => {
    const queryClient = useQueryClient()
    const [valueInput, setValueInput] = useState({})
    const mutation = useMutation({
        mutationFn: (product) =>
            fetch(`http://localhost:3000/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            }),
        onSuccess: () => queryClient.invalidateQueries(['PRODUCT'])
    })
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
        mutation.mutate(valueInput as any)
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
