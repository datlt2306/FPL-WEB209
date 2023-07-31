import "react-loading-skeleton/dist/skeleton.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
    return (
        <div>
            <ProductList />
            <Cart />
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
