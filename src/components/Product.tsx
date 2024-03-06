import React from "react";

interface ProductProps {
    item: { name: string; price: number };
}
const Product = (props: ProductProps) => {
    return (
        <div>
            <div>Tên sản phẩm : {props.item.name}</div>
            <div>Giá sản phẩm : {props.item.price}</div>
        </div>
    );
};

export default Product;
