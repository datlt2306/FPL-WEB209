import { getOneProduct } from '@/api/product'
import { useProductQuery } from '@/hooks/useProductQuery'
import { IProduct } from '@/interfaces/Product'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

const ProductEdit = () => {
    const { id } = useParams()
    const { data, isLoading, isError } = useProductQuery(id ? +id : 0)
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error.</div>
    return <div>{data?.name}</div>
}

export default ProductEdit
