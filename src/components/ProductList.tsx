import React, { useContext } from "react";
import { ProductContext } from "../contexts/product";
import { IProduct } from "../interfaces/Product";
import { Link } from "react-router-dom";

type ProductListProps = {
    products: IProduct[];
    removeItem: (id: number) => void;
};
const ProductList = ({ products, removeItem }: ProductListProps) => {
    return (
        <div>
            {products.map((item: IProduct, index) => (
                <div key={index}>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <button onClick={() => removeItem(item.id!)}>Remove</button>
                    <Link to={`/product/${item.id}/edit`}>Edit</Link>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
