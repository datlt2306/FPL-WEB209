import { useProductMutation } from '@/hooks/useProductMutation'
import { useProductQuery } from '@/hooks/useProductQuery'
import { DataTable } from './DataTable'
import { getColumns } from './Column'
import { useToast } from '../../../components/ui/use-toast'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

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

    return (
        <>
            <div className='flex items-center justify-between'>
                <h2>Quản lý sản phẩm</h2>
                <Link to='/admin/products/add'>
                    <Button>Thêm sản phẩm</Button>
                </Link>
            </div>
            <DataTable columns={columns} data={data} />
        </>
    )
}

export default List
