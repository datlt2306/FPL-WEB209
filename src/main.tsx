import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ProductProvider from "./context/productContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ProductProvider>
        <App />
    </ProductProvider>
);
