import { IProduct } from "@/interfaces/product";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import { Button } from "..";
import { addProduct, deleteProduct, getProducts, updateProduct } from "@/actions/product";

const ProductList = () => {
    const dispatch = useAppDispatch();
    const { products, isLoading, error } = useAppSelector((state: any) => state.product);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    if (error) return <div>Something went wrong</div>;
    return (
        <div>
            {isLoading ? (
                <Skeleton count={4} height={35} />
            ) : (
                products?.map((item: IProduct) => {
                    return (
                        <div key={item.id}>
                            {item.name}{" "}
                            <Button
                                onClick={() =>
                                    dispatch({
                                        type: "cart/add",
                                        payload: { ...item, quantity: 1 },
                                    })
                                }
                                type="primary"
                                icon={<AiOutlinePlus />}
                            />
                        </div>
                    );
                })
            )}

            <Button
                type="primary"
                onClick={() => dispatch(addProduct({ name: "Product Added", price: 500 }))}
            >
                Add Product
            </Button>
            <Button
                type="primary"
                onClick={() => dispatch(updateProduct({ name: "Product Updated", id: 3 }))}
            >
                Edit Product
            </Button>
            <Button type="danger" onClick={() => dispatch(deleteProduct(3))}>
                Delete Product
            </Button>
        </div>
    );
};

export default ProductList;
