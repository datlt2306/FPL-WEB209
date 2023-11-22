import { IProduct } from '@/interfaces/Product'
import { formatPrice } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

export const getColumns = (removeProduct: any): ColumnDef<IProduct>[] => [
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
                    <Link to={`/products/${row?.original.id}`}>Chỉnh sửa</Link>
                    <Button onClick={() => removeProduct(row?.original!)}>Xóa</Button>
                </>
            )
        }
    }
]
