import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.css";
import persistor, { store } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
