/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
    const [products, setProducts] = useState([] as any[]);
    const [status, setStatus] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:3000/products`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, [status]);
    return (
        <div className="App">
            <button onClick={() => setStatus(true)}></button>
            {products.map((item, index) => (
                <div key={index}>{item?.name}</div>
            ))}
        </div>
    );
};

export default App;
