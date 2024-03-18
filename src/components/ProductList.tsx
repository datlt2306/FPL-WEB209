import { useContext, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContextProvider";
import { IProduct } from "../interfaces/Product";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
    const [products, dispatch] = useContext(ProductContext);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/products`);
                dispatch({ type: "SET_PRODUCTS", payload: data });
                dispatch({ type: "UPDATE_PRODUCT", payload: { id: 1, name: "Product Update" } });

                // setProducts(data)
            } catch (error) {}
        })();
    }, []);
    const onHandleRemove = async (id: number) => {
        try {
            await axios.delete(`http://localhost:3000/products/${id}`);
            dispatch({ type: "DELETE_PRODUCT", payload: id });
        } catch (error) {}
    };
    return (
        <div>
            {products?.value?.map((item: IProduct, index: number) => (
                <div key={index}>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <button onClick={() => onHandleRemove(item.id!)}>Remove</button>
                    <Link to={`/product/${item.id}/edit`}>Edit</Link>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
