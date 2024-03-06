import React from "react";

interface ProductProps {
    name: string;
    price: number;
}
const Product = (props: ProductProps) => {
    return (
        <div>
            <div>Tên sản phẩm : {props.name}</div>
            <div>Giá sản phẩm : {props.price}</div>
        </div>
    );
};

export default Product;
