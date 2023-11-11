import { useContext, useState } from 'react'
import { IProduct } from '../../interfaces/Product'
import { ProductContext } from '../../context/product'

const ProductEdit = () => {
    const { state, dispatch } = useContext(ProductContext)
    const [valueInput, setValueInput] = useState<IProduct | {}>({})

    const onInput = (e: any) => {
        const { name, value } = e.target
        setValueInput({
            ...valueInput,
            [name]: value
        })
    }
    const onSubmit = async (e: any) => {
        e.preventDefault()

        await fetch(`http://localhost:3000/products/${state.product.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(valueInput)
        })
        dispatch({ type: 'UPDATE_PRODUCT', payload: { ...state.product, ...valueInput } })
    }
    return (
        <form onSubmit={onSubmit}>
            <h2>Sửa sản phẩm</h2>
            <input type='text' name='name' defaultValue={state.product.name} placeholder='Tên' onInput={onInput} />
            <input type='number' name='price' defaultValue={state.product.price} placeholder='Giá' onInput={onInput} />
            <button>Cập nhật</button>
        </form>
    )
}

export default ProductEdit
