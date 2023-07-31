// import { fetchProducts } from "@/actions/product";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Button } from "..";
import { addProduct, getProduct, removeProduct, updateProduct } from "@/actions/product";
import { add } from "@/slices/Cart";
import {
    useAddProductMutation,
    useFetchProductsQuery,
    useRemoveProductMutation,
} from "@/api/product";

const ProductList = () => {
    const dispatch = useAppDispatch();
    // const { products, isLoading, error } = useAppSelector((state: any) => state.products);

    // useEffect(() => {
    //     dispatch(getProduct());
    // }, []);

    const { data: products, isLoading, error } = useFetchProductsQuery();
    const [addProduct] = useAddProductMutation();
    const [removeProduct] = useRemoveProductMutation();
    if (isLoading) return <Skeleton count={3} height={35} />;
    if (error) return <div>{error}</div>;
    return (
        <div>
            {products?.map((item: any) => {
                return (
                    <div key={item.id}>
                        {item.name}
                        <Button
                            type="primary"
                            onClick={() => dispatch(add({ ...item, quantity: 1 }))}
                        >
                            Add to cart
                        </Button>
                    </div>
                );
            })}

            <Button type="primary" onClick={() => addProduct({ name: "Product D" })}>
                Add Product
            </Button>

            {/* <Button
                type="primary"
                onClick={() => dispatch(updateProduct({ name: "Product C updated ", id: 3 }))}
            >
                Update Product
            </Button> */}
            <Button type="primary" onClick={() => removeProduct(3)}>
                Delete Product
            </Button>
        </div>
    );
};

export default ProductList;
