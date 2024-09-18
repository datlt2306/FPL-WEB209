import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductAdd = () => {
    const [product, setProduct] = useState({});
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: async (product) => {
            await axios.post(`http://localhost:3000/products`, product);
        },
        onSuccess: () => {
            navigate("/products");
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });
    const onHandleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProduct({ ...product, [name]: type == "checkbox" ? checked : value });
    };
    const onHandleSubmit = async (e) => {
        e.preventDefault();
        mutation.mutate(product);
    };
    return (
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
    );
};

export default ProductAdd;
