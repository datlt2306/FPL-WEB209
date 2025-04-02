import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Authenticated from "./components/Authenticated";
import LayoutAdmin from "./components/LayoutAdmin";
import ProductAdd from "./pages/products/add";
import ProductList from "./pages/products/list";
import ProductEdit from "./pages/products/edit";
import SignupPage from "./pages/auth/signup";
import SigninPage from "./pages/auth/signin";

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="admin"
                    element={
                        <Authenticated fallback={<Navigate to="/signin" replace />}>
                            <LayoutAdmin>
                                <Outlet />
                            </LayoutAdmin>
                        </Authenticated>
                    }
                >
                    <Route index element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<h1>Dashboard</h1>} />
                    <Route path="products">
                        <Route index element={<ProductList />} />
                        <Route path="add" element={<ProductAdd />} />
                        <Route path="edit/:id" element={<ProductEdit />} />
                    </Route>
                </Route>
                <Route path="signin" element={<SigninPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </>
    );
}

export default App;
/**
 * state => useState
 * client state => component state - global state ( useContext, useReducer )
 *
 * count, setCount
 * modeColor, setModeColor
 * what?
 * when? sử dụng global state ( client state )? server state (react-query)
 * tech stack:
 * - FE : reactjs,
 *  + state: react-query (server state), useContext, useReducer ( client state - global),
 * - BE: nodejs, expressjs, mongodb
 * MERN stack
 * MEAN STack
 * server state ~ client state
 */
