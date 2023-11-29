import { IProduct } from '@/common/Type'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { formatPrice } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export const getColumns = (onRemove: any): ColumnDef<IProduct>[] => [
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
            const handleRemove = (product: IProduct) => {
                const confirm = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')
                if (confirm) onRemove(product)
            }
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
                                <Link to={`/admin/products/${original.id}/edit`}>Sửa</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Button variant='destructive' onClick={() => handleRemove(original)}>
                                    Xóa
                                </Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            )
        }
    }
]
