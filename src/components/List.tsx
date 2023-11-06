import React, { useContext } from 'react'
import { ProductContext } from '../context/product'

type Props = {}

const List = () => {
    const products = useContext(ProductContext)
    return (
        <div>
            {products?.map((product: any, index) => (
                <div key={index}>
                    {product.name}{' '}
                    <button onClick={() => getProduct(product.id!)} style={{ marginLeft: 10 }}>
                        Sửa
                    </button>
                </div>
            ))}
        </div>
    )
}

export default List
