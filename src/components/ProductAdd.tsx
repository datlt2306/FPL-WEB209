import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../interfaces/Product";
import { createProduct } from "../slice/product";
import { useAppDispatch } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { useAddProductMutation } from "../services/product";

const ProductAdd = () => {
    const [addProduct, result] = useAddProductMutation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IProduct>();
    // const navigate = useNavigate();
    // const dispatch = useAppDispatch();

    const onHandleSubmit: SubmitHandler<IProduct> = (data) => {
        // dispatch(createProduct(data)).then(() => {
        //     navigate("/");
        // });
        addProduct(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}

                <button>Submit</button>
            </form>
        </div>
    );
};

export default ProductAdd;
