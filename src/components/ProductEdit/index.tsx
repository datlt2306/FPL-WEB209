import { useState } from 'react'
import { IProduct } from '../../interfaces/Product'

type ProductEditProps = {
    product: IProduct
    onEdit: (product: IProduct) => void
}

const ProductEdit = ({ product, onEdit }: ProductEditProps) => {
    const [valueInput, setValueInput] = useState<IProduct | {}>({})

    const onInput = (e: any) => {
        const { name, value } = e.target
        setValueInput({
            ...valueInput,
            [name]: value
        })
    }
    const onSubmit = (e: any) => {
        e.preventDefault()
        onEdit({
            ...product,
            ...valueInput
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <h2>Sửa sản phẩm</h2>
            <input type='text' name='name' defaultValue={product.name} placeholder='Tên' onInput={onInput} />
            <input type='number' name='price' defaultValue={product.price} placeholder='Giá' onInput={onInput} />
            <button>Cập nhật</button>
        </form>
    )
}

export default ProductEdit
