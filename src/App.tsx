import "react-loading-skeleton/dist/skeleton.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
