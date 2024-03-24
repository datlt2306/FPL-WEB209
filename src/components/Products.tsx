import { useQuery } from "@tanstack/react-query";
import { IProduct } from "../interfaces/Product";
import { getProducts } from "../services/product";

const Products = () => {
    const {
        data: products,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["PRODUCT_KEY"],
        queryFn: async () => await getProducts(),
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Lỗi rồi</div>;
    return (
        <div>
            {products?.map((product: IProduct, index: number) => (
                <div key={index}>
                    {product.name}
                    {/* <button onClick={() => onRemove(product.id!)}>Xóa</button>
                    <Link to={`/product/${product.id}/edit`}>Cập nhật</Link> */}
                </div>
            ))}
        </div>
    );
};

export default Products;
