import React from 'react'

type Props = {}

const Form = (props: Props) => {
    return (
        <form onSubmit={onSubmit}>
            {JSON.stringify(valueInput)}
            <h2>Đăng nhập</h2>
            <input type='email' name='email' placeholder='Email' onInput={onInput} />
            <input type='password' name='password' placeholder='Mật khẩu' onInput={onInput} />
            <button>Đăng nhập</button>
        </form>
    )
}

export default Form
