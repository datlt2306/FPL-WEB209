import { useEffect, useState } from "react";
import "./App.css";
import { IProduct } from "./interfaces/Product";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function App() {
    // const [products, setProducts] = useState([]);
    // const [isError, setIsError] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             setIsLoading(true);
    //             const { data } = await axios.get("http://localhost:3001/products");
    //             setProducts(data);
    //             setIsLoading(false);
    //         } catch (error) {
    //             setIsError(true);
    //         }
    //     })();
    // }, []);
    // if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>Lỗi rồi</div>;

    const { data, isLoading, isError } = useQuery({
        queryKey: ["PRODUCT_KEY"],
        queryFn: async () => {
            const { data } = await axios.get("http://localhost:3000/products");
            return data;
        },
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Lỗi rồi</div>;
    return (
        <>
            {data.map((product: IProduct) => (
                <div key={product.id}>{product.name}</div>
            ))}
            {/* <Products /> */}
        </>
    );
}

export default App;
