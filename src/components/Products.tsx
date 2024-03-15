import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContextProvider";
import { IProduct } from "../interfaces/Product";
import { getProducts } from "../services/product";

const Products = () => {
    const { products, dispatch } = useContext(ProductContext); // { value: []}
    useEffect(() => {
        (async () => {
            const data = await getProducts();
            console.log("data", data);
            // setProducts(data);
            dispatch({ type: "SET_PRODUCTS", payload: data });
        })();
    }, []);

    return (
        <div>
            {products?.value?.map((product: IProduct, index) => (
                <div key={index}>
                    {product.name}
                    {/* <button onClick={() => onRemove(product.id!)}>Xóa</button>
                    <Link to={`/product/${product.id}/edit`}>Cập nhật</Link> */}
                </div>
            ))}
        </div>
    );
};

export default Products;
