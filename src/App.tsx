import "./App.css";
import Counter from "./components/Counter";
import ProductList from "./components/ProductList";
function App() {
    return (
        <>
            <div className="w-96 mx-auto border border-gray-500 p-2">
                <Counter />
                <hr />
                <ProductList />
            </div>
        </>
    );
}

export default App;
