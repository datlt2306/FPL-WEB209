import { useProductMutation } from '@/hooks/useProductMutation'
import { useProductQuery } from '@/hooks/useProductQuery'
import { DataTable } from './DataTable'
import { getColumns } from './Product/Column'
import { useToast } from './ui/use-toast'

const List = () => {
    const { toast } = useToast()
    const { data, isLoading, isError } = useProductQuery()
    const { onRemove } = useProductMutation({
        action: 'DELETE',
        onSuccess: () => {
            toast({
                variant: 'success',
                title: 'Chúc mừng thanh niên!!',
                description: 'Sản phẩm xóa thành công'
            })
        }
    })
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error...</div>

    const columns = getColumns(onRemove)

    return <DataTable columns={columns} data={data} />
}

export default List
