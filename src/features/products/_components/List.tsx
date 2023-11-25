import { Skeleton } from '@/components/ui/skeleton'
import { useToast } from '@/components/ui/use-toast'
import { useProductMutation } from '@/hooks/useProductMutation'
import { useProductQuery } from '@/hooks/useProductQuery'
import { getColumns } from './Column'
import { DataTable } from './DataTable'
import { IProduct } from '@/common/Type'

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
            <DataTable columns={columns} data={data as IProduct[]} />
        </div>
    )
}
export default ProductList
