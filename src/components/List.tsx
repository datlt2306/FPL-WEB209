import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { addProduct, deleteProduct, fetchProducts, updateProduct } from "@/slices/Product";
import { useEffect } from "react";
const List = () => {
    const dispatch = useAppDispatch();
    const { products } = useAppSelector((state: any) => state.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div>
            {products?.map((item: any) => {
                return (
                    <div key={item.id}>
                        {item.name}
                        {/* <button
                            onClick={() =>
                                dispatch({ type: "cart/add", payload: { ...item, quantity: 1 } })
                            }
                            className="bg-blue-500 text-white p-2"
                        >
                            Add to cart
                        </button> */}
                    </div>
                );
            })}
            <button
                className="border bg-blue-500 p-2"
                onClick={() => dispatch(addProduct({ name: "test" }))}
            >
                Add Product
            </button>

            <button
                className="border bg-blue-500 p-2"
                onClick={() => dispatch(updateProduct({ name: "test updated", id: 4 }))}
            >
                Update Product
            </button>
            <button className="border bg-blue-500 p-2" onClick={() => dispatch(deleteProduct(4))}>
                Delete Product
            </button>
        </div>
    );
};

export default List;
