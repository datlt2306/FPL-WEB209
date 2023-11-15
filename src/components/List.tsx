import { useQuery } from 'react-query'
import { getProducts } from '../apis/product'
import { ColumnDef } from '@tanstack/react-table'
import { IProduct } from '@/interfaces/Product'
import { DataTable } from './DataTable'
import { Button } from './ui/button'
import { formatPrice } from '@/lib/utils'

export const columns: ColumnDef<IProduct>[] = [
    {
        accessorKey: 'name',
        header: () => <span className='font-bold'>Tên sản phẩm</span>
    },
    {
        accessorKey: 'price',
        header: 'Giá',
        cell: ({ row }) => {
            const formattedPrice = formatPrice(row.getValue('price') || 0)

            return <div dangerouslySetInnerHTML={{ __html: formattedPrice }} />
        }
    },
    {
        accessorKey: '',
        header: 'Hành động',
        cell: ({ row }) => {
            return (
                <>
                    <Button onClick={() => console.log(row?.original.id)}>Xóa</Button>
                </>
            )
        }
    }
]

const List = () => {
    const {
        data: products,
        isLoading,
        isError
    } = useQuery({
        // cung cấp 1 query key
        queryKey: ['PRODUCT'],
        // call api
        queryFn: async () => {
            const { data } = await getProducts()
            return data
        }
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error...</div>

    // return <div>{products?.map((product: any, index: any) => <ProductItem key={index} product={product} />)}</div>

    // return <div>{products?.map((product: any, index: any) => <div key={index}>{product?.name}</div>)}</div>

    return <DataTable columns={columns} data={products} />
}

export default List
// npm i react-query
// npm i @tanstack/react-query-devtools
