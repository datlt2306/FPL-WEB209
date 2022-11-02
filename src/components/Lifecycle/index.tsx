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
            try {
                const data = await (await fetch("http://localhost:3000/products")).json();
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const removeProduct = async (id: number) => {
        try {
            await (
                await fetch(`http://localhost:3000/products/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
            ).json();
            // Rerender
            setProducts(products.filter((item) => item.id !== id));
        } catch (error) {}
    };
    return (
        <div>
            {products.length > 0
                ? products.map((product) => (
                      <div key={product.id}>
                          <span>
                              {product.name} - {product.price} - {product.quantity}
                          </span>
                          <button onClick={() => removeProduct(product.id)}>Remove</button>
                      </div>
                  ))
                : "Loading..."}
        </div>
    );
};

export default Lifecycle;
