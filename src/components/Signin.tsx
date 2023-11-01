import React, { useState } from 'react'

type SigninProps = {
    onSignin: (product: any) => void
}

const Signin = ({ onSignin }: SigninProps) => {
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
        onSignin(value)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' name='email' onChange={onChange} />
                <input type='number' name='password' onChange={onChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Signin
