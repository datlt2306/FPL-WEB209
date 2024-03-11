import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider, { ProductContext } from "./context/productProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ProductContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ProductContextProvider>
);

/**
 * - hướng dẫn cài đặt react sử dụng vitejs
 * npm create vite@latest react-vite -- --template react-ts
 *
 */
