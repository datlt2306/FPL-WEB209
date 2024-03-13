import React, { useContext } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../interfaces/Product";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContextProvider";

type FormValue = {
    name: string;
    price: number;
    desc: string;
};

const ProductAdd = () => {
    const { onHandleAdd } = useContext(ProductContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValue>();

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormValue> = (data) => {
        onHandleAdd(data);
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
