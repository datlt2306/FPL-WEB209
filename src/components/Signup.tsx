import { useContext, useState } from 'react'
import { ProductContext } from '../context/product'

const Signup = () => {
    const { onSignup } = useContext(ProductContext)
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
            <h2>Đăng ký</h2>
            <form onSubmit={onSubmit}>
                <input type='text' name='email' onChange={onChange} />
                <input type='number' name='password' onChange={onChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Signup
