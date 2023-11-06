import React, { useContext } from 'react'
import { IProduct } from '../interfaces/Product'
import { ProductContext } from '../context/Product'

const List = () => {
    const { products, onHandleGetProduct } = useContext(ProductContext)
    return (
        <div>
            <h2>Danh sách</h2>
            {products?.map((product: IProduct, index: number) => (
                <div key={index}>
                    {product.name} - <button onClick={() => onHandleGetProduct(product.id!)}>Sửa</button>
                </div>
            ))}
        </div>
    )
}

export default List
