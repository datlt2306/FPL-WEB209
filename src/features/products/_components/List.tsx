import { Skeleton } from '@/components/ui/skeleton'
import { useProductMutation } from '@/hooks/useProductMutation'
import { useProductQuery } from '@/hooks/useProductQuery'
import { IProduct } from '../../common/Type'
import { useToast } from '../ui/use-toast'
import { getColumns } from '../../features/products/_components/Column'
import { DataTable } from '../../features/products/_components/DataTable'

const ProductList = () => {
    const { toast } = useToast()
    const { data, isLoading, isError } = useProductQuery()
    const { onRemove } = useProductMutation({
        action: 'DELETE',
        onSuccess: () => {
            toast({
                description: 'Xóa thành công',
                variant: 'success'
            })
        }
    })
    if (isLoading)
        return (
            <>
                <Skeleton className='w-[200px] h-[20px] rounded-full' />
                <Skeleton className='w-[100px] h-[20px] rounded-full' />
            </>
        )
    if (isError) return <div>Error.</div>
    const columns = getColumns(onRemove)
    return (
        <div>
            <h2>Quản lý sản phẩm</h2>
            <DataTable columns={columns} data={data as IProduct[]} />
        </div>
    )
}
export default ProductList
