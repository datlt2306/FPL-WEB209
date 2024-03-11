import { useEffect, useState } from "react";
import "./App.css";
import ProductAdd from "./components/ProductAdd";

interface IProduct {
    id: number;
    name: string;
    price: number;
}
function App() {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3000/products");
            const data = await response.json();
            setProducts(data);
        })();
    }, []);
    return (
        <>
            <ProductAdd />
        </>
    );
}

export default App;
