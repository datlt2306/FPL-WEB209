import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import ProductProvider from "./context[draft]/ProductProvider.tsx";
import CounterProvider from "./context[draft]/CounterProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <App />
    </Provider>
);
