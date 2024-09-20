import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const { data, isLoading, isError, error } = useQuery({
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
        onError: (error) => {
            console.log(error);
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

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;
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
                        id=""
                        value={product.category || ""}
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
                        value={product.available || ""}
                        onChange={onHandleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Mô tả sản phẩm</label>
                    <textarea
                        name="description"
                        id=""
                        value={product.description || ""}
                        onChange={onHandleChange}
                    ></textarea>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ProductEdit;

/**
 * 1. Lấy ID trên url
 * 2. Gọi API lấy thông tin sản phẩm theo ID
 * 3. Hiển thị thông tin sản phẩm lên input form
 * 4. Lấy giá trị form sau khi submit
 */
