/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

const UseEffectDemo = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`http://localhost:3000/products`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div>
            {products.map((item: any) => {
                return <div key={item.id}>{item.name}</div>;
            })}
        </div>
    );
};

export default UseEffectDemo;
