import { useState } from 'react'
import { IProduct } from '../../interfaces/Product'
import { useMutation, useQueryClient } from 'react-query'
import { addProduct } from '../../api/product'

const ProductAdd = () => {
    const queryClient = useQueryClient()
    const [valueInput, setValueInput] = useState<IProduct>({} as IProduct)

    const mutation = useMutation({
        mutationFn: (product: IProduct) => addProduct(product),
        onSuccess: () => queryClient.invalidateQueries('PRODUCT_KEY')
    })

    const onInput = (e: any) => {
        const { name, value } = e.target
        setValueInput({
            ...valueInput,
            [name]: value
        })
    }
    const onSubmit = async (e: any) => {
        e.preventDefault()
        mutation.mutate(valueInput)
    }
    return (
        <form onSubmit={onSubmit}>
            {JSON.stringify(valueInput)}
            <h2>Thêm sản phẩm</h2>
            <input type='text' name='name' placeholder='Tên' onInput={onInput} />
            <input type='number' name='price' placeholder='Giá' onInput={onInput} />
            <button>Thêm</button>
        </form>
    )
}

export default ProductAdd
