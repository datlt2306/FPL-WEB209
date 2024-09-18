import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
    /**
     * cài đặt:
     * 1. npm i @tanstack/react-query
     * 2. import QueryClientProvider client={queryClient} ở main.js
     * 3.
     */
    return (
        <>
            <Routes>
                <Route path="/" element={<h1>Home page</h1>} />
                <Route
                    path="/add"
                    element={
                        <>Thêm sản phẩm</>
                        // <form onSubmit={onHandleSubmit}>
                        //     <input type="text" name="name" onChange={onHandleChange} />
                        //     <input type="number" name="price" onChange={onHandleChange} />
                        //     <input type="text" name="pictureUrl" onChange={onHandleChange} />
                        //     <select name="category" onChange={onHandleChange}>
                        //         <option value="1">Danh mục A</option>
                        //         <option value="2">Danh mục b</option>
                        //     </select>
                        //     <textarea name="description" onChange={onHandleChange}></textarea>
                        //     <input type="checkbox" name="available" onChange={onHandleChange} />
                        //     <button>Submit</button>
                        // </form>
                    }
                />
                <Route path="/products" element={<ProductList />} />
            </Routes>
        </>
    );
}

export default App;
