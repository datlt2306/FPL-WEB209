import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../interfaces/Product";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ProductContext } from "../context/ProductContextProvider";

type Inputs = {
    name: string;
    price: number;
};
const ProductAdd = () => {
    const [, dispatch] = useContext(ProductContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (product) => {
        try {
            const { data } = await axios.post(`http://localhost:3000/products`, product);
            // rerender
            dispatch({ type: "ADD_PRODUCT", payload: data });
            navigate("/products");
        } catch (error) {}
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Tên sản phẩm"
                    {...register("name", { required: true })}
                />
                {errors.name && <span>Trường name là bắt buộc</span>}
                <input type="number" placeholder="Giá sản phẩm" {...register("price")} />
                <button>Thêm</button>
            </form>
        </div>
    );
};

export default ProductAdd;
