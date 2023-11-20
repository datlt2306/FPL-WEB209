import { getProduct } from '@/apis/product'
import { useProductQuery } from '@/hooks/useProductQuery'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import NameForm from './Product/NameForm'
import PriceForm from './Product/PriceForm'

type Props = {}

const Edit = (props: Props) => {
    const { id } = useParams()
    const { data } = useProductQuery(id)
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <NameForm data={data} />
                </div>
                <div>
                    <PriceForm data={data} />
                </div>
            </div>
        </div>
    )
}

export default Edit
