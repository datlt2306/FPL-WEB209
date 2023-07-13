import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductProvider } from "./context/Product.tsx";
import CounterProvider from "./context/Counter.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ProductProvider>
        <CounterProvider>
            <App />
        </CounterProvider>
    </ProductProvider>
);
