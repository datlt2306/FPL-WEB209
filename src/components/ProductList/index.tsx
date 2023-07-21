import { instance } from "@/axios/config";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "..";
import { addProduct, fetchProducts, removeProduct, updateProduct } from "@/actions/Product";
import { Dispatch } from "redux";

const ProductList = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { products, isLoading, error } = useSelector((state: any) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (isLoading) return <Skeleton count={3} />;
    if (error) return <div>{error}</div>;
    return (
        <div>
            {products?.map((product: any) => (
                <div key={product.id} className="mb-3">
                    {product.name}{" "}
                    <Button
                        type="primary"
                        onClick={() =>
                            dispatch({ type: "cart/add", payload: { ...product, quantity: 1 } })
                        }
                    >
                        Add to cart
                    </Button>
                </div>
            ))}

            <Button onClick={() => dispatch(addProduct({ name: "Product Added 1" }))}>Thêm</Button>

            <Button onClick={() => dispatch(updateProduct({ name: "Product Updated", id: 4 }))}>
                Updated
            </Button>
            <Button onClick={() => dispatch(removeProduct(4))}>Delete</Button>
        </div>
    );
};

export default ProductList;
