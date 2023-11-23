import { Skeleton } from '@/components/ui/skeleton'
import { useProductQuery } from '@/hooks/useProductQuery'
import { ColumnDef } from '@tanstack/react-table'
import { Link } from 'react-router-dom'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { IProduct } from '../../interfaces/Product'
import { Button } from '../ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { DataTable } from './DataTable'
import { useProductMutation } from '@/hooks/useProductMutation'
import { toast } from '../ui/use-toast'
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
            const product = row?.original as IProduct
            const { onRemove } = useProductMutation({
                action: 'DELETE',
                onSuccess: () => {
                    toast({
                        variant: 'success',
                        description: 'Xóa sản phẩm thành công'
                    })
                }
            })
            return (
                <>
                    <Link to={`/product/${product.id}/edit`}>
                        <Button>Sửa</Button>
                    </Link>
                    <Button
                        onClick={() => {
                            window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?') && onRemove(product)
                        }}
                    >
                        Xóa
                    </Button>
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
