import { useContext, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContextProvider";
import { IProduct } from "../interfaces/Product";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../actions/product";

const ProductList = () => {
    // const [products, dispatch] = useContext(ProductContext);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const { data } = await axios.get(`http://localhost:3000/products`);
    //             dispatch({ type: "SET_PRODUCTS", payload: data });
    //             dispatch({ type: "UPDATE_PRODUCT", payload: { id: 1, name: "Product Update" } });

    //             // setProducts(data)
    //         } catch (error) {}
    //     })();
    // }, []);
    // const onHandleRemove = async (id: number) => {
    //     try {
    //         await axios.delete(`http://localhost:3000/products/${id}`);
    //         dispatch({ type: "DELETE_PRODUCT", payload: id });
    //     } catch (error) {}
    // };
    const dispatch = useDispatch();
    const { products } = useSelector((state: { products: IProduct[] }) => state);

    useEffect(() => {
        dispatch(setProducts());
    }, [dispatch]);

    console.log(products);
    return (
        <div>
            {products?.map((item: IProduct, index: number) => (
                <div key={index}>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    {/* <button onClick={() => onHandleRemove(item.id!)}>Remove</button> */}
                    <Link to={`/product/${item.id}/edit`}>Edit</Link>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
