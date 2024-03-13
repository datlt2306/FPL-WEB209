import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../interfaces/Product";
import { useNavigate } from "react-router-dom";

type FormValue = {
    name: string;
    price: number;
    desc: string;
};

const ProductAdd = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValue>();

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormValue> = (data) => {
        onAdd(data);
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
