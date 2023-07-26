// import { fetchProducts } from "@/actions/product";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Button } from "..";
import { getProduct } from "@/slices/Product";

const ProductList = () => {
    const dispatch = useAppDispatch();
    const { products, isLoading, error } = useAppSelector((state: any) => state.products);

    useEffect(() => {
        dispatch(getProduct());
    }, []);

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
                            onClick={() =>
                                dispatch({ type: "cart/add", payload: { ...item, quantity: 1 } })
                            }
                        >
                            Add to cart
                        </Button>
                    </div>
                );
            })}

            {/* <Button type="primary" onClick={() => addProduct({ name: "Product C" })}>
                Add Product
            </Button>

            <Button
                type="primary"
                onClick={() => updateProduct({ name: "Product C updated ", id: 3 })}
            >
                Update Product
            </Button>
            <Button type="primary" onClick={() => removeProduct({ id: 3 })}>
                Delete Product
            </Button> */}
        </div>
    );
};

export default ProductList;
