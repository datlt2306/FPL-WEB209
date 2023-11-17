import { getProduct } from '@/apis/product'
import { useProductQuery } from '@/hooks/useProductQuery'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

type Props = {}

const Detail = (props: Props) => {
    const { id } = useParams()
    const { data } = useProductQuery(id)
    console.log(data)
    return <div>{data?.name}</div>
}

export default Detail
