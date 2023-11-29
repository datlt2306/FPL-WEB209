import { IProduct } from '@/common/Type'
import { useProductMutation } from '@/hooks/useProductMutation'
import { useProductQuery } from '@/hooks/useProductQuery'
import { PlusCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/ui/button'
import { useToast } from '../../../components/ui/use-toast'
import { getColumns } from './Columns'
import { DataTable } from './DataTable'

const List = () => {
    const { toast } = useToast()
    const { isLoading, isError, data } = useProductQuery()
    const { onRemove } = useProductMutation({
        action: 'DELETE',
        onSuccess: () => {
            toast({
                title: 'Success',
                description: 'Xóa sản phẩm thành công',
                variant: 'success'
            })
        }
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error....</div>
    const columns = getColumns(onRemove)
    return (
        <div>
            <div className='flex items-center justify-between'>
                <h2>Quản lý sản phẩm</h2>
                <Link to='/admin/products/add'>
                    <Button variant='link'>
                        <PlusCircle />
                        Thêm sản phẩm
                    </Button>
                </Link>
            </div>
            <DataTable columns={columns} data={data as IProduct[]} />
        </div>
    )
}

export default List
