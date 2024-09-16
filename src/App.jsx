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
    const [product, setProduct] = useState({});
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:3000/products`);
            setProducts(data);
        })();
    }, []);
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

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/products`, product);
            if (response.status !== 201) {
                throw new Error("Có lỗi xảy ra");
            }
            console.log(`Thêm sản phẩm thành công`);
            setProducts([...products, response.data]);
        } catch (error) {
            throw new Error(error);
        }
    };
    const onHandleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProduct({ ...product, [name]: type === "checkbox" ? checked : value });
    };
    return (
        <>
            {JSON.stringify(product)}
            <h1>Danh sách sản phẩm</h1>
            <form onSubmit={onHandleSubmit}>
                <input type="text" name="name" onChange={onHandleChange} />
                <input type="number" name="price" onChange={onHandleChange} />
                <input type="text" name="pictureUrl" onChange={onHandleChange} />
                <select name="category" onChange={onHandleChange}>
                    <option value="1">Danh mục A</option>
                    <option value="2">Danh mục b</option>
                </select>
                <textarea name="description" onChange={onHandleChange}></textarea>
                <input type="checkbox" name="available" onChange={onHandleChange} />
                <button>Submit</button>
            </form>
            {products.map((product) => (
                <div key={product.id}>
                    {product.name} - {product.price}
                </div>
            ))}
        </>
    );
}

export default App;
