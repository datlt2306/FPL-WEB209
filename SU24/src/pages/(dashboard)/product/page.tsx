import { IProduct } from "@/common/types/product";
import { getAllProducts } from "@/services/product";
import { useEffect, useState } from "react";

const ProductPage = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const response = await getAllProducts();
                const data = await response.data;
                if (response.status !== 200) throw new Error("Error");
                setProducts(data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);
    if (isLoading) return <div>Loading....</div>;
    if (isError) return <div>Error</div>;
    return (
        <>
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
                    {products &&
                        products.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button>Xem</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
};

export default ProductPage;
