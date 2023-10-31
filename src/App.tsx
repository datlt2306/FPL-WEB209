import { useState } from 'react'
import './App.css'
const dataFake = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product A', price: 100 },
    { id: 3, name: 'Product A', price: 100 }
]
type Product = {
    id: number
    name: string
    price: number
}
type ProductListProps = {
    products: Product[]
}
const ProductList = ({ products }: ProductListProps) => {
    if (!products) return <>Không có sản phẩm nào</>
    return (
        <>
            {products.map((item, index) => (
                <div key={index}>{item.name}</div>
            ))}
        </>
    )
}
function App() {
    const [products] = useState<Product[]>(dataFake)
    return (
        <>
            <ProductList products={products} />
        </>
    )
}

export default App
