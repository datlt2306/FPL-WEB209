import { getProducts } from "@/actions/product";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { useEffect } from "react";

const ProductList = () => {
    const dispatch = useAppDispatch();
    const { products, isLoading, error } = useAppSelector((state: any) => state.products);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div>
            {products?.map((item: any) => (
                <div key={item.id}>
                    {item.name}
                    <button
                        onClick={() =>
                            dispatch({ type: "cart/add", payload: { ...item, quantity: 1 } })
                        }
                    >
                        Add to cart
                    </button>
                </div>
            ))}
            {/* <button onClick={() => dispatch(addProduct({ name: "Product C" }))}>Add</button>
            <button onClick={() => dispatch(updateProduct({ name: "Product C updated", id: 3 }))}>
                Update
            </button>
            <button onClick={() => dispatch(deleteProduct(3))}>Delete</button> */}
        </div>
    );
};

export default ProductList;
