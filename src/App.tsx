import Cart from "./components/Cart";
import Counter from "./components/Counter";
import ProductList from "./components/ProductList";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
    return (
        <div>
            <h2 className="font-bold text-2xl">Counter</h2>
            <Counter />
            <hr className="my-4" />
            <h2 className="font-bold text-2xl">Product List</h2>
            <ProductList />
            <hr className="my-4" />
            <h2 className="font-bold text-2xl">Cart</h2>
            <Cart />
        </div>
    );
}

export default App;
