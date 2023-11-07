import { IProduct } from '../../interfaces/Product'

type ProductListProps = {
    products: IProduct[]
    onGetProduct: (id: number) => void
}
const ProductList = ({ products, onGetProduct }: ProductListProps) => {
    if (!products) return <>Không có sản phẩm nào</>
    return (
        <>
            {products.map((item, index) => (
                <div key={index}>
                    {item.name} <button onClick={() => onGetProduct(item.id!)}>Sửa</button>
                </div>
            ))}
        </>
    )
}
export default ProductList
