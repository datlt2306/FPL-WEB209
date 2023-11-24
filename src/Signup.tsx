import React, { useContext, useState } from 'react'
import { IProduct } from './common/Type'
import { ProductContext } from './store/Product'

const Signup = () => {
    const { onHanldeSignup } = useContext(ProductContext)
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
            onHanldeSignup(valueInput)
        }
    }
    return (
        <div>
            <h2>Đăng ký</h2>
            {JSON.stringify(valueInput)}
            <form onSubmit={onSubmit}>
                <input type='email' name='email' placeholder='Email' onInput={onHandleInput} />
                <input type='password' name='password' placeholder='Password' onInput={onHandleInput} />
                <button>Thêm</button>
            </form>
        </div>
    )
}

export default Signup
