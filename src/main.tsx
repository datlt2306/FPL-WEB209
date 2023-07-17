import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import CounterProvider from "./context[draft]/CounterContext.tsx";
import "./index.css";
import ProductProvider from "./context[draft]/ProductContext.tsx";
import store from "./store/index.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    // <ProductProvider>
    //     <CounterProvider>
    //         <App />
    //     </CounterProvider>
    // </ProductProvider>
    <Provider store={store}>
        <App />
    </Provider>
);
