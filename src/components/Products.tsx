import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IProduct } from "../interfaces/Product";
import { getProducts, removeProduct } from "../services/product";
import { Link } from "react-router-dom";
import useProductQuery from "../hooks/useProductQuery";
import useProductMutation from "../hooks/useProductMutation";

const Products = () => {
    const { data: products, isLoading, isError } = useProductQuery();
    const { mutate } = useProductMutation({
        action: "DELETE",
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Lỗi rồi</div>;
    return (
        <div>
            {products?.map((product: IProduct, index: number) => (
                <div key={index}>
                    {product.name}
                    <button onClick={() => mutate(product)}>Xóa</button>
                    <Link to={`/products/${product.id}/edit`}>Cập nhật</Link>
                </div>
            ))}
        </div>
    );
};

export default Products;
