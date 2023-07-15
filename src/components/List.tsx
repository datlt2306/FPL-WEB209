import ProductContext from "@/context/Product.tsx";
import axios from "axios";
import { useContext, useEffect } from "react";

const List = () => {
    const { state, dispatch } = useContext(ProductContext) as any;
    console.log("state", state);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get("http://localhost:3000/products");
                dispatch({ type: "FETCH_PRODUCTS", payload: data });
            } catch (error) {
            } finally {
            }
        };
        fetchProducts();
    }, []);

    const addProduct = async (product: any) => {
        try {
            // call api
            const { data } = await axios.post("http://localhost:3000/products", product);
            // rerender
            dispatch({ type: "ADD_PRODUCT", payload: data });
        } catch (error) {}
    };
    const updateProduct = async (product: any) => {
        try {
            // call api
            const { data } = await axios.put(
                "http://localhost:3000/products/" + product.id,
                product
            );
            // rerender
            dispatch({ type: "UPDATE_PRODUCT", payload: data });
        } catch (error) {}
    };
    const deleteProduct = async (id: any) => {
        try {
            // call api
            await axios.delete("http://localhost:3000/products/" + id);
            // rerender
            dispatch({ type: "REMOVE_PRODUCT", payload: id });
        } catch (error) {}
    };
    return (
        <div>
            {state?.products.map((item: any) => {
                return <div key={item.id}>{item.name}</div>;
            })}
            <button className="border bg-blue-500 p-2" onClick={() => addProduct({ name: "test" })}>
                Add Product
            </button>
            <button
                className="border bg-blue-500 p-2"
                onClick={() => updateProduct({ name: "test updated", id: 4 })}
            >
                Update Product
            </button>
            <button className="border bg-blue-500 p-2" onClick={() => deleteProduct(4)}>
                Delete Product
            </button>
        </div>
    );
};

export default List;
