import React, { useContext } from "react";
import { IProduct } from "../interfaces/Product";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/productProvider";

const Products = () => {
    const products = useContext(ProductContext);
    return (
        <div>
            {products.map((product: IProduct, index) => (
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
