import React, { useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../interfaces/Product";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

type FormValue = {
    name: string;
    price: number;
    desc: string;
};

const ProductEdit = () => {
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValue>();

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:3000/products/${id}`);
            reset(data);
        })();
    }, [id]);
    const onSubmit: SubmitHandler<FormValue> = (data) => {
        // console.log(data);
        onEdit(data);
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

export default ProductEdit;
