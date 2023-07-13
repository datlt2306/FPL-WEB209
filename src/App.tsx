import Counter from "./components/Counter";
import ProductList from "./components/ProductList";
import "react-loading-skeleton/dist/skeleton.css";

const App = () => {
    return (
        <div>
            <h2>Counter</h2>
            <Counter />
            <h2>Products</h2>
            {/* <ProductList /> */}
        </div>
    );
};
export default App;
