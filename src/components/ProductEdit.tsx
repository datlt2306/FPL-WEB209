import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../interfaces/Product";
import { createProduct, fetchProduct, updateProduct } from "../slice/product";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store";

const ProductEdit = () => {
    const { id } = useParams();
    const { item } = useAppSelector((state: RootState) => state.product);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IProduct>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onHandleSubmit: SubmitHandler<IProduct> = (data) => {
        dispatch(updateProduct({ id: item.id, ...data }));
    };

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, []);
    return (
        <div>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <input
                    type="text"
                    defaultValue={item.name}
                    {...register("name", { required: true })}
                />
                {errors.name && <span>This field is required</span>}

                <button>Submit</button>
            </form>
        </div>
    );
};

export default ProductEdit;
