import React from "react";
import { IProduct } from "../interfaces/Product";

type ProductsListProps = {
    data: IProduct[];
    onClick: (id: number) => void;
};

const ProductsList = ({ data, onClick }: ProductsListProps) => {
    return (
        <div>
            ProductsList $
            {data.map((product) => (
                <div key={product.id}>
                    {product.name}
                    <button onClick={() => onClick(10)}>Click</button>
                </div>
            ))}
        </div>
    );
};

export default ProductsList;
