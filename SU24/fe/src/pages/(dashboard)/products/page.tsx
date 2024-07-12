import { IProduct } from "@/common/types/product";
import { getAllProducts, removeProduct } from "@/services/product";
import React, { useEffect, useState } from "react";

type Props = {};

const ProductPage = (props: Props) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const response = await getAllProducts();
                if (response.status !== 200) {
                    console.log("error");
                    return null;
                }
                setProducts(response.data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    const removeItem = async (product: IProduct) => {
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?");
        if (!confirm) return;
        try {
            setIsLoading(true);
            const { response } = await removeProduct(product);
            if (response && response.status !== 200) return alert(`Xóa thất bại, thử lại sau`);
            alert("Xóa sản phẩm thành công");
            setProducts(products.filter((item) => item._id !== product._id));
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;
    return (
        <div>
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
                                    <button onClick={() => removeItem(item)}>Xóa</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductPage;
