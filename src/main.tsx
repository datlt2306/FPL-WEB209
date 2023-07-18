import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";

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
