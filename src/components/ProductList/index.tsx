import { Skeleton } from '@/components/ui/skeleton'
import { useProductQuery } from '@/hooks/useProductQuery'
import { ColumnDef } from '@tanstack/react-table'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { IProduct } from '../../interfaces/Product'
import { Button } from '../ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { DataTable } from './DataTable'
export const columns: ColumnDef<IProduct>[] = [
    {
        accessorKey: 'name',
        header: () => (
            <div className='text-red-500'>
                Tên sản phẩm
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <BsFillQuestionCircleFill />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Nội dung</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        )
    },
    {
        accessorKey: 'price',
        header: 'Giá sản phẩm'
    },
    {
        id: 'action',
        cell: ({ row }) => {
            const id = row?.original?.id
            return (
                <>
                    <Link to={`/product/${id}/edit`}>
                        <Button>Sửa</Button>
                    </Link>
                    <Button onClick={() => console.log(id)}>Xóa</Button>
                </>
            )
        }
    }
]

const ProductList = () => {
    const { data, isLoading, isError } = useProductQuery()
    if (isLoading)
        return (
            <>
                <Skeleton className='w-[200px] h-[20px] rounded-full' />
                <Skeleton className='w-[100px] h-[20px] rounded-full' />
            </>
        )
    if (isError) return <div>Error.</div>

    return (
        <div>
            <h2>Quản lý sản phẩm</h2>
            <DataTable columns={columns} data={data as IProduct[]} />
        </div>
    )
}
export default ProductList
