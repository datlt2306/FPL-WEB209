import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAddProductMutation } from "../apiSlice/product";
import { IProduct } from "../interfaces/product";

type Props = {};

const ProductAdd = (props: Props) => {
    const [addProduct, result] = useAddProductMutation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IProduct>();
    const onSubmit: SubmitHandler<IProduct> = (data) => addProduct(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} />
                <input type="number" {...register("price")} />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ProductAdd;
