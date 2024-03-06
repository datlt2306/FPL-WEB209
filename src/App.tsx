import "./App.css";
import Product from "./components/Product";

function App() {
    const products = [
        { name: "Product A", price: 20 }, // item
        { name: "Product B", price: 30 }, // item
        { name: "Product C", price: 40 }, // item
    ];
    return (
        <>
            {products.map((item, index) => {
                return <Product item={item} key={index} />;
            })}
        </>
    );
}

export default App;

//
