import { IProduct } from '../../interfaces/Product'

type ProductListProps = {
    products: IProduct[]
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
export default ProductList
