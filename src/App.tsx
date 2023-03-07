import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ProductsList from "./components/ProductsList";

function App() {
    const [products, setProducts] = useState([
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
    ]);
    const onHandleRemove = (id: number) => {
        console.log(id);
    };
    return (
        <div className="App">
            <ProductsList data={products} onClick={onHandleRemove} />
        </div>
    );
}

export default App;
