import { ProductContext } from "@/context/ProductProvider";
import axios from "axios";
import { useContext, useEffect } from "react";

const ProductList = () => {
    const { state, dispatch } = useContext(ProductContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/products`);
                dispatch({ type: "FETCH_PRODUCTS", payload: data });
            } catch (error) {}
        };
        fetchProduct();
    }, []);
    const addProduct = async (product: any) => {
        console.log("product", product);
        try {
            // call api
            const { data } = await axios.post(`http://localhost:3000/products/`, product);
            // rerender
            dispatch({ type: "ADD_PRODUCT", payload: data });
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
        </div>
    );
};

export default ProductList;
