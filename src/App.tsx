import "./App.css";
import Product from "./components/Product";

function App() {
    return (
        <>
            {/* // { name: "Product A" price:{20} } */}
            <Product name="Product A" price={20} />
            <Product name="Product B" price={30} />
            <Product name="Product C" price={40} />
        </>
    );
}

export default App;

//
