import React, { useEffect, useState } from "react";

interface IProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
}
const Lifecycle = () => {
    const [products, setProducts] = useState<IProduct[]>([]); // 1
    useEffect(() => {
        (async () => {
            const data = await (await fetch("http://localhost:3000/products")).json();
            setProducts(data);
        })();
    }, []);
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    {product.name} - {product.price} - {product.quantity}
                </div>
            ))}
        </div>
    );
};

export default Lifecycle;
