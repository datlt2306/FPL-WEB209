import { ProductContext } from "@/context/Product";
import { useContext, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Button } from "..";

const ProductList = () => {
    const { products, fetchProducts, isLoading, error, addProduct, removeProduct, updateProduct } =
        useContext(ProductContext);

    useEffect(() => {
        fetchProducts();
    }, []);
    if (isLoading) return <Skeleton count={3} />;
    if (error) return <div>{error}</div>;
    return (
        <div>
            {products?.map((product: any) => (
                <div key={product.id}>{product.name}</div>
            ))}

            <Button onClick={() => addProduct({ name: "Product Added" })}>Thêm</Button>
            <Button onClick={() => updateProduct({ name: "Product Updated", id: 4 })}>
                Updated
            </Button>
            <Button onClick={() => removeProduct({ id: 4 })}>Delete</Button>
        </div>
    );
};

export default ProductList;
