import Cart from "./components/Cart";
import Counter from "./components/Counter";
import ProductList from "./components/ProductList";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
    return (
        <div>
            <Counter />
            {/* <ProductList />
            <hr className="my-3" />
            <h2 className="font-bold text-2xl">Cart</h2>
            <Cart /> */}
        </div>
    );
}

export default App;
