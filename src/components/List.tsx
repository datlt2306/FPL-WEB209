import React from 'react'
import { IProduct } from '../interfaces/Product'

type ListProps = {
    products: IProduct[]
    onGetProduct: (id: number) => void
}

const List = ({ products, onGetProduct }: ListProps) => {
    return (
        <div>
            <h2>Danh sách</h2>
            {products?.map((product, index) => (
                <div key={index}>
                    {product.name} - <button onClick={() => onGetProduct(product.id!)}>Sửa</button>
                </div>
            ))}
        </div>
    )
}

export default List
