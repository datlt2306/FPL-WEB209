import React from "react";
import { IProduct } from "../interfaces/Product";
import { Link } from "react-router-dom";

interface ProductProps {
    products: IProduct[];
}
const Products = ({ products }: ProductProps) => {
    return (
        <div>
            {products.map((product: IProduct, index) => (
                <div key={index}>
                    {product.name} <button>Xóa</button>
                    <Link to={`/product/${product.id}/edit`}>Cập nhật</Link>
                </div>
            ))}
        </div>
    );
};

export default Products;
