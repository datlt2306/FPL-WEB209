import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContextProvider";
import { IProduct } from "../interfaces/Product";
import { Link } from "react-router-dom";

const ProductList = () => {
    const { products, onHandleRemove } = useContext(ProductContext);
    console.log(products);
    return (
        <div>
            {products.map((item: IProduct, index: number) => (
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
