import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
    // 1. Khai báo state
    // 2. xây dựng JSX hiển thị giao diện
    // 3. Sử dụng useEffect (hook) để gọi API
    // 3.1 Gọi API lấy dữ liệu ( async/await - fetch/axios)
    // 3.2 Cập nhật state

    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState(false);
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:3000/products`);
            setProducts(data);
        })();
    }, [status]);
    /**
     * Đồng bộ là gì? chạy từng bước 1, bước nào chạy xong thì mới chạy bước tiếp theo
     * Bất đồng bộ là gì? chạy cùng 1 lúc nhiều bước
     * Xử lý bất đồng bộ: chuyển bất đồng bộ thành đồng bộ
     */

    /*
        useEffect(callBack, deps) => là một hook của react dùng để thực thi các side effect
        - trường hợp 1: useEffect(callBack) => sẽ thực thi callBack mỗi khi component được render
        - trường hợp 2: useEffect(callBack, []) => sẽ thực thi callBack một lần duy nhất sau khi component được render
        - trường hợp 3: useEffect(callBack, [deps]) => sẽ thực thi callBack mỗi khi deps thay đổi
    */
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setStatus(true)}>Status</button>
            <h1>Danh sách sản phẩm</h1>
            {products.map((product) => (
                <div key={product.id}>
                    {product.name} - {product.price}
                </div>
            ))}
        </>
    );
}

export default App;
