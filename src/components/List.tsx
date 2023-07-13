import ProductContext from "@/context/Product.tsx";
import axios from "axios";
import { useContext, useEffect } from "react";

const List = () => {
    const { state, dispatch } = useContext(ProductContext) as any;
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
    return (
        <div>
            {state?.products.map((item: any) => {
                return <div key={item.id}>{item.name}</div>;
            })}
        </div>
    );
};

export default List;
