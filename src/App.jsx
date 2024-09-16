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
    /**
     * Khai báo state: [product]
     * 1. Xây dựng form thêm sản phẩm: name, price, description, image, available(checkbox)
     * 2. Lấy giá trị của input khi người dùng nhập vào: onChange event
     * 3. Xử lý submit form: onSubmit event
     */
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`http://localhost:3000/products`);
                if (response.status !== 200) {
                    throw new Error("Lỗi khi gọi API");
                }
                const data = await response.data;
                setProducts(data);
            } catch (error) {
                console.error("Lỗi khi gọi API: ", error);
            }
        })();
    }, []);

    const onHandleChange = (e) => {
        const { name, value, type, checked } = e.target;
        // computed property name
        setProduct({ ...product, [name]: type == "checkbox" ? checked : value });
    };
    const onHandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/products`, product);
            if (response.status !== 201) {
                throw new Error("Lỗi khi thêm sản phẩm");
            }
            setProducts([...products, response.data]);
        } catch (error) {
            throw new Error("Lỗi khi thêm sản phẩm", error);
        }
    };
    return (
        <>
            {JSON.stringify(product)}
            <h1>Thêm sản phẩm</h1>
            <form onSubmit={onHandleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Tên sản phẩm</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Tên sản phẩm"
                        onChange={onHandleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Danh mục</label>
                    <select name="category" id="" onChange={onHandleChange}>
                        <option value="1">Danh mục A</option>
                        <option value="2">Danh mục B</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Giá sản phẩm</label>
                    <input
                        type="number"
                        name="price"
                        placeholder="Giá sản phẩm"
                        onChange={onHandleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Ảnh sản phẩm</label>
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Ảnh sản phẩm"
                        onChange={onHandleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Trạng thái</label>
                    <input type="checkbox" name="available" onChange={onHandleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Mô tả sản phẩm</label>
                    <textarea name="description" id="" onChange={onHandleChange}></textarea>
                </div>
                <button>Submit</button>
            </form>
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
