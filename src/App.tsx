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
            const response = await fetch(`api/products`);
            const data = await response.json(); // [{....}]
            setProducts(data);
        })();
    }, []);

    const removeItem = (id: number) => {
        const newProducts = products.filter((item) => item.id !== id);
        setProducts(newProducts);
    };
    return (
        <>
            {products.map((item: IProduct, index) => (
                <div key={index}>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <button onClick={() => removeItem(item.id!)}>Remove</button>
                </div>
            ))}
        </>
    );
}

export default App;
