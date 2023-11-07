import React, { useState } from 'react'
import { IProduct } from '../../interfaces/Product'

type Props = {
    onSignup: (user: IProduct) => void
}

const Signup = ({ onSignup }: Props) => {
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
        onSignup(valueInput)
    }
    return (
        <form onSubmit={onSubmit}>
            {JSON.stringify(valueInput)}
            <h2>Đăng ký</h2>
            <input type='email' name='email' placeholder='Email' onInput={onInput} />
            <input type='password' name='password' placeholder='Mật khẩu' onInput={onInput} />
            <button>Thêm</button>
        </form>
    )
}

export default Signup
