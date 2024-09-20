import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    const { data } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            return await axios.get(`http://localhost:3000/products/${id}`);
        },
    });

    useEffect(() => {
        if (data) {
            setProduct(data.data);
        }
    }, [data]);
    const { mutate } = useMutation({
        mutationFn: async (product) => {
            return await axios.put(`http://localhost:3000/products/${id}`, product);
        },
        onSuccess: () => {
            navigate("/products");
        },
    });
    const onHandleChange = (e) => {
        const { name, value, type, checked } = e.target;
        // computed property name
        setProduct({ ...product, [name]: type == "checkbox" ? checked : value });
    };
    const onHandleSubmit = (e) => {
        e.preventDefault();
        mutate(product);
    };
    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Tên sản phẩm</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Tên sản phẩm"
                        value={product.name || ""}
                        onChange={onHandleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Danh mục</label>
                    <select
                        name="category"
                        value={product.category || ""}
                        id=""
                        onChange={onHandleChange}
                    >
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
                        value={product.price || ""}
                        onChange={onHandleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Ảnh sản phẩm</label>
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Ảnh sản phẩm"
                        value={product.imageUrl || ""}
                        onChange={onHandleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Trạng thái</label>
                    <input
                        type="checkbox"
                        name="available"
                        checked={product.available || ""}
                        onChange={onHandleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Mô tả sản phẩm</label>
                    <textarea
                        name="description"
                        value={product.description || ""}
                        id=""
                        onChange={onHandleChange}
                    ></textarea>
                </div>
                <button>Submit</button>
            </form>
            ;
        </div>
    );
};

export default ProductEdit;
/**
 * Bước 1: Lấy ID trên url sử dung useParams
 * Bước 2: Call API dựa trên ID vừa lấy được để lấy dữ liệu sản phẩm
 * Bước 3: Hiển thị dữ liệu sản phẩm lên form từ thông sản phẩm vừa lấy được
 *  3.1: Sau khi lấy dữ liệu từ API thành công thì set vào state product
 *  3.2: Hiển thị dữ liệu từ state product lên form
 * Bước 4: Submit form
 *  4.1 Khi người dùng thay đổi dữ liệu trên form thì cập nhật vào state product
 *  4.2 Sử dụng mutation để gọi API cập nhật sản phẩm
 */
