import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";
type FormValue = {
    name: string;
    price: number;
};

const ProductAdd = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValue>();

    const onSubmit: SubmitHandler<FormValue> = (data) => {
        console.log(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} />
                <input type="number" {...register("price")} />
                <button>Theem</button>
            </form>
        </div>
    );
};

export default ProductAdd;
