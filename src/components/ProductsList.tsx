import React from "react";

type ProductsListProps = {
    data: { id?: number; name: string }[];
    onClick: (id: number) => void;
};

const ProductsList = ({ data }: ProductsListProps) => {
    return (
        <div>
            ProductsList
            {/* <button onClick={() => onHandleRemove(10)}>Click</button> */}
        </div>
    );
};

export default ProductsList;
