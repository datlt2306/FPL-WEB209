import React from "react";
import { getProducts } from "@/app/lib/product";
import { IProduct } from "@/app/interfaces/product";
const ProductPage = async () => {
    const data = await getProducts();
    console.log(data);
    return (
        <div>
            {data.map((product: IProduct) => (
                <li key={product.id}>{product.name}</li>
            ))}
        </div>
    );
};
export default ProductPage;
