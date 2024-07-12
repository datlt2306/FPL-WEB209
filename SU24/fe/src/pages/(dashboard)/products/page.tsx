import { IProduct } from '@/common/types/product'
import { Button } from '@/components/ui/button';
import { getAllProducts } from '@/services/product';
import { Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react'

type Props = {}

const ProductsPage = (props: Props) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    useEffect(() => {
        (async() => {
            try {
                setIsLoading(true);
                const response = await getAllProducts();
                if(response.status !== 200) {
                    return setIsError(true);
                }
                setProducts(response.data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        })()
    }, []);

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error</div>
  return (
    <div>
        <div className="flex items-center justify-between">
            <h1>Quản lý sản phẩm</h1>
            <Button variant="violet"><Plus /> Thêm</Button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {products && products.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        
    </div>
  )
}

export default ProductsPage