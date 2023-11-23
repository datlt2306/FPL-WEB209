import { IProduct } from '@/interfaces/Product'
import { ColumnDef } from '@tanstack/react-table'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

export const getColumns = (onRemove: (product: IProduct) => void): ColumnDef<IProduct>[] => [
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
            const product = row?.original
            return (
                <>
                    <Link to={`/product/${product.id}/edit`}>
                        <Button>Sửa</Button>
                    </Link>
                    <Button
                        onClick={() => {
                            window.confirm('Bạn có chắc chắn xóa không?') && onRemove(product)
                        }}
                    >
                        Xóa
                    </Button>
                </>
            )
        }
    }
]
