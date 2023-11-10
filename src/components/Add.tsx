import React, { useContext, useState } from 'react'
import { IProduct } from '../interfaces/Product'
import Demo from './Demo'
import { ProductContext } from '../context/Product'
import { useMutation, useQueryClient } from 'react-query'
import { add } from '../api/product'

const Add = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: (product: IProduct) => add(product),
        onSuccess: () => {
            queryClient.invalidateQueries('PRODUCTS_KEY')
        }
    })
    const [valueInput, setValueInput] = useState<IProduct>({ name: '', price: 0 })
    const onHandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValueInput({
            ...valueInput,
            [name]: value
        })
    }
    const onSubmit = async (e: any) => {
        e.preventDefault()
        mutation.mutate(valueInput as any)
    }
    return (
        <div>
            <h2>Thêm sản phẩm</h2>
            {JSON.stringify(valueInput)}
            <form onSubmit={onSubmit}>
                <input type='text' name='name' placeholder='Name' onInput={onHandleInput} />
                <input type='number' name='price' placeholder='Price' onInput={onHandleInput} />
                <button>Thêm</button>
            </form>
            <Demo />
        </div>
    )
}

export default Add
