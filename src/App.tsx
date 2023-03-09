import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ProductsList from "./components/ProductsList";
import { IProduct } from "./interfaces/Product";
import axios from "axios";
import Counter from "./components/Counter";

function App() {
    const [products, setProducts] = useState<IProduct[]>([
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
    ]);
    const onHandleRemove = (id: number) => {
        console.log(id);
    };

    useEffect(() => {
        axios.get("http://localhost:3000/products").then(({ data }) => setProducts(data));
    }, []);

    return (
        <div className="App">
            <Counter />
            <ProductsList data={products} onClick={onHandleRemove} />
        </div>
    );
}

export default App;
