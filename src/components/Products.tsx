import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IProduct } from "../interfaces/Product";
import { getProducts, removeProduct } from "../services/product";
import { Link } from "react-router-dom";

const Products = () => {
    const queryClient = useQueryClient();

    const {
        data: products,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["PRODUCT_KEY"],
        queryFn: async () => await getProducts(),
    });
    const { mutate } = useMutation({
        mutationFn: async (id: number | string) => await removeProduct(id),
        onSuccess: () => {
            // refetching
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"],
            });
        },
    });

    const removeItem = (id: number | string) => {
        window.confirm("Bạn có chắc chắn muốn xóa không?") && mutate(id);
    };
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Lỗi rồi</div>;
    return (
        <div>
            {products?.map((product: IProduct, index: number) => (
                <div key={index}>
                    {product.name}
                    <button onClick={() => removeItem(product.id!)}>Xóa</button>
                    <Link to={`/products/${product.id}/edit`}>Cập nhật</Link>
                </div>
            ))}
        </div>
    );
};

export default Products;
