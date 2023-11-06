import React, { useContext } from 'react'
import { ProductContext } from '../context/Product'

type Props = {}

const Demo = (props: Props) => {
    const { myName } = useContext(ProductContext)
    return <div>{myName}</div>
}

export default Demo
