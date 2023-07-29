import { IProduct } from "@/interfaces/product";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "..";
import { addProduct, deleteProduct, getProducts, updateProduct } from "@/actions/product";
import { add } from "@/slices/cart";

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
                <div>Loading...</div>
            ) : (
                products?.map((item: IProduct) => {
                    return (
                        <div key={item.id}>
                            {item.name}{" "}
                            <Button
                                onClick={() => dispatch(add({ ...item, quantity: 1 }))}
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
