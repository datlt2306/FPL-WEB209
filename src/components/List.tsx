import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const List = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state: any) => state.products);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get("http://localhost:3000/products");
                dispatch({ type: "products/fetchProducts", payload: data });
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
            dispatch({ type: "products/addProduct", payload: data });
        } catch (error) {}
    };
    const updateProduct = async (product: any) => {
        try {
            // call api
            const { data } = await axios.put(
                "http://localhost:3000/products/" + product.id,
                product
            );
            console.log("data", data);
            // rerender
            dispatch({ type: "products/updateProduct", payload: data });
        } catch (error) {}
    };
    const deleteProduct = async (id: any) => {
        try {
            // call api
            await axios.delete("http://localhost:3000/products/" + id);
            // rerender
            dispatch({ type: "products/deleteProduct", payload: id });
        } catch (error) {}
    };
    return (
        <div>
            {products?.map((item: any) => {
                return <div key={item.id}>{item.name}</div>;
            })}
            <button className="border bg-blue-500 p-2" onClick={() => addProduct({ name: "test" })}>
                Add Product
            </button>
            <button
                className="border bg-blue-500 p-2"
                onClick={() => updateProduct({ name: "test updated", id: 3 })}
            >
                Update Product
            </button>
            <button className="border bg-blue-500 p-2" onClick={() => deleteProduct(3)}>
                Delete Product
            </button>
        </div>
    );
};

export default List;
