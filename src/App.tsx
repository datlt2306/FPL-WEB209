import "./App.css";
import Cart from "./components/Cart";
import Counter from "./components/Counter";
import ProductList from "./components/ProductList";
function App() {
    return (
        <>
            <div className="w-96 mx-auto border border-gray-500 p-2">
                <Counter />
                <hr />
                <ProductList />
                <hr />
                <Cart />
            </div>
        </>
    );
}

export default App;
