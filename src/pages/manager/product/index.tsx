import ProductList from '@/features/products/_components/List'
import React from 'react'

type Props = {}

const ManagerProductPage = (props: Props) => {
    return (
        <div>
            <h1>Quản lý sản phẩm</h1>
            <ProductList />
        </div>
    )
}

export default ManagerProductPage
