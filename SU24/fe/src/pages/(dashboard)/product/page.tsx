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

    const removeItem = async (id: number | string) => {
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
        if (!confirm) return;
        try {
            setIsLoading(true);
            const response = await fetch(
                `http://localhost:8080/api/products/${id}`,
                { method: "DELETE" },
            );
            if (response.status !== 200) return alert("Xóa thất bại");
            setProducts(products.filter((product) => product._id !== id));
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

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
                        products.map((item: IProduct, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button
                                        onClick={() => removeItem(item._id!)}
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
};

export default ProductPage;
