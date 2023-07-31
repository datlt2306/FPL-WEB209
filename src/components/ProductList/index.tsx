import { getProducts } from "@/actions/Product";
import { useAddProductMutation, useFetchProductsQuery, useRemoveMutation } from "@/api/product";
import { add } from "@/slices/Cart";
import { useAppDispatch } from "@/store/hook";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Button } from "..";

const ProductList = () => {
    const dispatch = useAppDispatch();
    const { data: products, isLoading, error } = useFetchProductsQuery();
    const [addProduct] = useAddProductMutation();
    const [removeProduct] = useRemoveMutation();
    if (isLoading) return <Skeleton count={3} />;
    if (error) return <div>{error}</div>;
    return (
        <div>
            {products?.map((product: any) => (
                <div key={product.id} className="mb-3">
                    {product.name}{" "}
                    <Button
                        type="primary"
                        onClick={() => dispatch(add({ ...product, quantity: 1 }))}
                    >
                        Add to cart
                    </Button>
                </div>
            ))}
            <Button onClick={() => dispatch(addProduct({ name: "Product Added 1" }))}>Thêm</Button>
            <Button onClick={() => dispatch(removeProduct(3))}>Delete</Button>
        </div>
    );
};

export default ProductList;
