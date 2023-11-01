import React, { useState } from 'react'

type SignupProps = {
    onSignup: (product: any) => void
}

const Signup = ({ onSignup }: SignupProps) => {
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
        onSignup(value)
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

export default Signup
