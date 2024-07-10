import { IProduct } from '@/common/types/product';
import { getAllProducts } from '@/services/product';
import React, { useEffect, useState } from 'react'

type Props = {}

const ProductPage = (props: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
	(async() => {
		try {
			setIsLoading(true);
			const response = await getAllProducts();
			if(response.status !== 200) {
				throw new Error("Failed to fetch products")
			}
			setProducts(response.data);
		} catch (error) {
			setIsError(true);
		} finally{
			setIsLoading(false);
		}
	})()
  }, []);

  if(isLoading) return <div>Loading...</div>;
  if(isError) return <div>Error</div>
  return (
    <div>
      <h1>Quản lý sản phẩm</h1>
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
					<td>
						<button>Xóa</button>
					</td>
				</tr>
			))}
		</tbody>
		
	  </table>
    </div>
  )
}

export default ProductPage