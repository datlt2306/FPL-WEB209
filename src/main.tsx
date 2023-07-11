import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ProductProvider from "./context/Product.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ProductProvider>
        <App />
    </ProductProvider>
);
