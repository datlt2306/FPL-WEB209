import React, { useContext, useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../interfaces/Product";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ProductContext } from "../contexts/ProductContextProvider";

type FormValue = {
    name: string;
    price: number;
    desc: string;
};

const ProductEdit = () => {
    const [, dispatch] = useContext(ProductContext);
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
    const onSubmit: SubmitHandler<FormValue> = async (product) => {
        try {
            const { data } = await axios.put(`http://localhost:3000/products/${id}`, product);

            // rerender
            dispatch({ type: "UPDATE_PRODUCT", payload: data as IProduct });
            navigate("/products");
        } catch (error) {
            console.log(error);
        }
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
