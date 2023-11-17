import { getOne } from '@/api/product'
import { useProductQuery } from '@/hooks/useProductQuery'
import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

type Props = {}

const Edit = (props: Props) => {
    const { id } = useParams()
    const { data } = useProductQuery(id ? +id : 0)
    return <div>{data?.name}</div>
}

export default Edit
