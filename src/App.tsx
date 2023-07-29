import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { router } from "./routes";
import Cart from "./components/Cart";
import Counter from "./components/Counter";
import List from "./components/List";
const App = () => {
    return (
        <div>
            <RouterProvider router={router} />
            <h2 className="font-bold text-2xl">Counte</h2>
            <Counter />
            <hr className="my-3" />
            <h2 className="font-bold text-2xl">Product</h2>
            <List />
            <Cart />
        </div>
    );
};

export default App;
