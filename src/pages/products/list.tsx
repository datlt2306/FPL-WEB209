import React, { useEffect, useState } from "react";
import { IProduct } from "../../types/product";
import axios from "axios";

const ProductList = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`http://localhost:3000/products123`);
                if (response.status !== 200) {
                    throw new Error("An error occurred while fetching the data");
                }
                setData(response.data);
            } catch (error: any) {
                setError(error?.response?.statusText);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div>
            <ul>
                {data.map((item: IProduct, index) => (
                    // optional chaining => ?.
                    <li key={item?.id}>
                        {item?.name} - {item?.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
