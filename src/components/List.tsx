import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useProductQuery } from '@/hooks/useProductQuery'
import { IProduct } from '@/interfaces/Product'
import { formatPrice } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'
import { DataTable } from './DataTable'
import { Button } from './ui/button'

const columns: ColumnDef<IProduct>[] = [
    {
        accessorKey: 'name',
        header: () => <span className='text-red-500'>Tên sản phẩm</span>
    },
    {
        accessorKey: 'price',
        header: 'Giá sản phẩm',
        cell: ({ row }) => {
            const formattedPrice = formatPrice(row.getValue('price') || 0)
            return <span dangerouslySetInnerHTML={{ __html: formattedPrice }} />
        }
    },
    {
        id: 'action',
        cell: ({ row: { original } }) => {
            return (
                <>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant='ghost' className='h-8 w-8 p-0'>
                                <span className='sr-only'>Open menu</span>
                                <MoreHorizontal className='h-4 w-4' />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                            <DropdownMenuItem>
                                <Link to={`/products/${original.id}/edit`}>Sửa</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            )
        }
    }
]

const List = () => {
    const { isLoading, isError, data } = useProductQuery()

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error....</div>
    return (
        <div>
            <h2>Danh sách</h2>
            <DataTable columns={columns} data={data as IProduct[]} />
        </div>
    )
}

export default List
