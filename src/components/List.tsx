import { useQuery } from 'react-query'
import { getProducts } from '../apis/product'
import { ColumnDef } from '@tanstack/react-table'
import { IProduct } from '@/interfaces/Product'
import { DataTable } from './DataTable'
import { Button } from './ui/button'
import { formatPrice } from '@/lib/utils'
import { Link } from 'react-router-dom'
import { useProductQuery } from '@/hooks/useProductQuery'
import ProductItem from './ProductItem'

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
                    <Link to={`/products/${row?.original.id}`}>Chi tiết</Link>
                    <Button onClick={() => console.log(row?.original.id)}>Xóa</Button>
                </>
            )
        }
    }
]

const List = () => {
    const { data, isLoading, isError } = useProductQuery()
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error...</div>

    // return <DataTable columns={columns} data={data} />
    return (
        <div>
            {data.map((item: IProduct) => (
                <ProductItem key={item.id} product={item} />
            ))}
        </div>
    )
}

export default List
