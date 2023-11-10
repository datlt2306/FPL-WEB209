import { useQuery } from 'react-query'
import { getAll } from '../api/product'
import { IProduct } from '../interfaces/Product'

const List = () => {
    const {
        isLoading,
        isError,
        data: products
    } = useQuery({
        queryKey: 'PRODUCTS_KEY',
        queryFn: () => getAll()
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error....</div>
    return (
        <div>
            <h2>Danh sách</h2>
            {products?.map((product: IProduct, index: number) => (
                <div key={index}>
                    {product.name}
                    {/* <button onClick={() => dispatch({ type: 'GET_PRODUCT', payload: product.id! })}>Sửa</button> */}
                    {/* <button onClick={() => dispatch({ type: 'DELETE_PRODUCT', payload: product.id! })}>Xóa</button> */}
                </div>
            ))}
        </div>
    )
}

export default List
