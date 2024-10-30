import React from "react";
import { getProducts } from "@/app/lib/product";
const ProductPage = async () => {
    const data = await getProducts();
    return (
        <div>
            {data.map((product: any) => (
                <li>{product.name}</li>
            ))}
        </div>
    );
};
export default ProductPage;
