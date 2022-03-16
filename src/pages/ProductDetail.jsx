import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../api/products';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    console.log(id);
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await get(id);
            setProduct(data);
        }
        getProduct();
    }, [id])
  return (
    <div>{product && product.name}</div>
  )
}

export default ProductDetail