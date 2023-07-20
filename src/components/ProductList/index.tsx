import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addProduct, deleteProduct, fetchProducts, updateProduct } from "@/actions/product";
import { Dispatch } from "redux";

const ProductList = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { products, isLoading, error } = useSelector((state: any) => state.products);
    useEffect(() => {
        // default dispatch chỉ nhận 1 plain object
        // dispatch({type: "abc"})
        dispatch(fetchProducts());
    }, [dispatch]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div>
            {products?.map((item: any) => (
                <div key={item.id}>{item.name}</div>
            ))}
            <button onClick={() => dispatch(addProduct({ name: "Product C" }))}>Add</button>
            <button onClick={() => dispatch(updateProduct({ name: "Product C updated", id: 3 }))}>
                Update
            </button>
            <button onClick={() => dispatch(deleteProduct(3))}>Delete</button>
        </div>
    );
};

export default ProductList;

// isloading = true
try {
    // success
} catch (error) {
    // error.message
} finally {
    // isloading = false
}
