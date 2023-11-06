import React, { useState } from 'react'
import { IProduct } from './interfaces/Product'

type SignupProps = {
    onSignup: (product: IProduct) => void
}

const Signup = ({ onSignup }: SignupProps) => {
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
            onSignup(valueInput)
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
