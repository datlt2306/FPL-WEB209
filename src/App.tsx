import { useState } from "react";
import "./App.css";
import Product from "./components/Product";

function App() {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    function handleClick() {
        console.log();
    }
    return (
        <>
            <button onClick={() => handleClick}>Click</button>
            {count}
            <button onClick={() => setCount(count + 1)}>Click</button>
            <hr />
            {products.map((item, index) => {
                return <Product item={item} key={index} />;
            })}
        </>
    );
}

export default App;

// function show(value){
//   console.log(value)
// }

// function sum(a, b, callback){
//   callback(a + b);
// }

// sum(10, 20, show)
