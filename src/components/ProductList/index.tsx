import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const ProductList = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state: any) => state.products);
    useEffect(() => {
        const fetchProduct = async () => {
            // call api
            const { data } = await axios.get(`http://localhost:3000/products`);
            // rerender
            dispatch({ type: "products/fetchProducts", payload: data });
        };
        fetchProduct();
    }, []);
    const addProduct = async (product: any) => {
        const { data } = await axios.post(`http://localhost:3000/products`, product);
        dispatch({ type: "products/addProduct", payload: data });
    };
    const updateProduct = async (product: any) => {
        const { data } = await axios.put(`http://localhost:3000/products/${product.id}`, product);
        dispatch({ type: "products/updateProduct", payload: data });
    };
    const deleteProduct = async (id: any) => {
        await axios.delete(`http://localhost:3000/products/${id}`);
        dispatch({ type: "products/deleteProduct", payload: id });
    };
    return (
        <div>
            {products?.map((item: any) => (
                <div key={item.id}>{item.name}</div>
            ))}
            <button onClick={() => addProduct({ name: "Product C" })}>Add</button>
            <button onClick={() => updateProduct({ name: "Product C updated", id: 3 })}>
                Update
            </button>
            <button onClick={() => deleteProduct(3)}>Delete</button>
        </div>
    );
};

export default ProductList;
