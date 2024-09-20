import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const ProductAdd = () => {
    const [product, setProduct] = useState({});
    const { mutate } = useMutation({
        mutationFn: async (product) => {
            return await axios.post(`http://localhost:3000/products`, product);
        },
    });
    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProduct({ ...product, [name]: type === "checkbox" ? checked : value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        mutate(product);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" name="name" placeholder="Tên sản phẩm" onChange={onChange} />
                </div>
                <div>
                    <input type="number" name="price" placeholder="Giá" onChange={onChange} />
                </div>
                <div>
                    <input type="checkbox" name="status" id="status" onChange={onChange} />
                    <label htmlFor="status">Tình trạng</label>
                </div>
                <div>
                    <select name="category" onChange={onChange}>
                        <option value="1">Danh sách 1</option>
                        <option value="2">Danh sách 2</option>
                    </select>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ProductAdd;
