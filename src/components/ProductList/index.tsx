import { instance } from "@/axios/config";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "..";
import { fetchProducts } from "@/actions/product";
import { Dispatch } from "redux";

const ProductList = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { products, isLoading, error } = useSelector((state: any) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
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
