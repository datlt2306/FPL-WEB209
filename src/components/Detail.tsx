import { getProduct } from '@/apis/product'
import { useProductQuery } from '@/hooks/useProductQuery'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import NameForm from './Product/NameForm'
import PriceForm from './Product/PriceForm'

type Props = {}

const Detail = (props: Props) => {
    const { id } = useParams()
    const { data } = useProductQuery(id)
    console.log(data)
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <NameForm />
                </div>
                <div>
                    <PriceForm />
                </div>
            </div>
        </div>
    )
}

export default Detail
