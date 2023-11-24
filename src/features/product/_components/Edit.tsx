import { useProductQuery } from '@/hooks/useProductQuery'
import { useParams } from 'react-router-dom'
import NameForm from './NameForm'
import PriceForm from './PriceForm'
import { IProduct } from '@/common/Type'

type Props = {}

const Edit = (props: Props) => {
    const { id } = useParams()
    const { data, isLoading } = useProductQuery(id ? +id : 0)
    if (isLoading) return <div>Loading...</div>
    return (
        <div className='grid grid-cols-2 gap-8 max-w-4xl mx-auto'>
            <NameForm data={data as IProduct} />
            <PriceForm data={data as IProduct} />
        </div>
    )
}

export default Edit
