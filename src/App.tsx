import Cart from "./components/Cart";
import Counter from "./components/Counter";
import List from "./components/List";

const App = () => {
    return (
        <div>
            <h2>List Component</h2>
            <List />
            {/* <Counter /> */}
            <hr className="my-3" />
            <h2 className="font-bold text-2xl">Cart</h2>
            <Cart />
        </div>
    );
};

export default App;

// closure
// currying
