import React, { useContext } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../interfaces/Product";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContextProvider";
import axios from "axios";

type FormValue = {
    name: string;
    price: number;
    desc: string;
};

const ProductAdd = () => {
    const [, dispatch] = useContext(ProductContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValue>();

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormValue> = async (product) => {
        try {
            const { data } = await axios.post("http://localhost:3000/products", product);
            // rerender
            dispatch({ type: "ADD_PRODUCT", payload: data as IProduct });
        } catch (error) {}
        navigate("/products");
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}
                <input type="number" {...register("price")} />
                <input type="desc" {...register("desc", { required: true })} />
                <button>Theem</button>
            </form>
        </div>
    );
};

export default ProductAdd;
