import { useEffect, useState } from "react";
import "./App.css";

interface IProduct {
    id: number;
    name: string;
    price: number;
}
function App() {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3001/products");
            const data = await response.json();
            setProducts(data);
        })();
    }, []);
    return (
        <>
            {products.map((item: IProduct, index) => (
                <div key={index}>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                </div>
            ))}
        </>
    );
}

export default App;
