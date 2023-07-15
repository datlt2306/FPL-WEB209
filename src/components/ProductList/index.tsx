import { ProductContext } from "@/context/ProductProvider";
import axios from "axios";
import { useContext, useEffect } from "react";

const ProductList = () => {
    const { state, dispatch } = useContext(ProductContext);
    console.log("state", state);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/products`);
                dispatch({ type: "product/fetch", payload: data });
            } catch (error) {}
        };
        fetchProduct();
    }, []);
    const addProduct = async (product: any) => {
        try {
            // call api
            const { data } = await axios.post(`http://localhost:3000/products/`, product);
            // rerender
            dispatch({ type: "product/add", payload: data });
        } catch (error: any) {
            console.log(error.message);
        }
    };
    const updateProduct = async (product: any) => {
        try {
            // call api
            const { data } = await axios.put(
                `http://localhost:3000/products/${product.id}`,
                product
            );
            // rerender
            dispatch({ type: "product/update", payload: data });
        } catch (error: any) {
            console.log(error.message);
        }
    };
    const removeProduct = async (id: any) => {
        try {
            // call api
            await axios.delete(`http://localhost:3000/products/${id}`);
            // rerender
            dispatch({ type: "product/delete", payload: id });
        } catch (error: any) {
            console.log(error.message);
        }
    };
    return (
        <div>
            {state?.products?.map((item: any) => (
                <div key={item.id}>{item.name}</div>
            ))}

            <button onClick={() => addProduct({ name: "Product C" })}>Add Product</button>
            <button onClick={() => updateProduct({ name: "Product C updated", id: 3 })}>
                Update Product
            </button>
            <button onClick={() => removeProduct(3)}>Delete Product</button>
        </div>
    );
};

export default ProductList;
