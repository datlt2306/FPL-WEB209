import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
    /* 
    1. Khai báo state : [products]
    2. Sử dụng jsx để hiển thị dữ liệu
    3. Sử dụng hook useEffect để gọi api và cập nhật state
        3.1: Gọi API: fetch/then
        3.2: Cập nhật state

        ======================
        useEffect():
        - trường hợp 1: useEffect(() => {}) - không có deps
        - trường hợp 2: useEffect(() => {}, []) - deps = []
        - trường hợp 3: useEffect(() => {}, [state1, state2]) - deps = [state1, state2]
    */
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`http://localhost:4000/products`);
                if (response.status !== 200) {
                    throw new Error("Lỗi khi gọi API");
                }
                const data = await response.data;
                setProducts(data);
            } catch (error) {
                console.error("Lỗi khi gọi API: ", error);
            }
        })();

        // axios
        //     .get(`http://localhost:3000/products`)
        //     .then((response) => setProducts(response.data))
        //     .catch((error) => {
        //         console.error("Lỗi khi gọi API: ", error);
        //     });
        // .then((data) => setProducts(data));
    }, []);
    return (
        <>
            <h1>Danh sách sản phẩm</h1>
            {products.map((product) => (
                <div key={product.id}>
                    {product.name} - {product.price}
                </div>
            ))}
        </>
    );
};

export default App;
