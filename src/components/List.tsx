import { useQuery } from 'react-query'

const List = () => {
    const {
        isLoading,
        isError,
        data: products
    } = useQuery('PRODUCT', async () => {
        try {
            const data = await (await fetch('http://localhost:3000/products')).json()
            return data
        } catch (error) {}
    })
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error...</div>

    return (
        <div>
            {products?.map((product: any, index: any) => (
                <div key={index}>
                    {product.name}
                    <button
                        onClick={() => dispatch({ type: 'GET_PRODUCT', payload: product.id! })}
                        style={{ marginLeft: 10 }}
                    >
                        Sửa
                    </button>
                </div>
            ))}
        </div>
    )
}

export default List
// npm i react-query
// npm i @tanstack/react-query-devtools
