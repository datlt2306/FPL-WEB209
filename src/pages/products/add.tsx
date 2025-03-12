import { Loader2, Save } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { productApi } from "../services/productApi";
import axios from "axios";
import { ProductFormData } from "../../types/product";
import { useMutation } from "@tanstack/react-query";
// import { createProduct } from "../../api/product";

export const ProductForm = () => {
    const { register, handleSubmit } = useForm<ProductFormData>();
    const { mutate, isPending } = useMutation({
        mutationFn: async (formData: any) => {
            axios.post(`http://localhost:3000/products`, formData);
        },
    });
    const onSubmit = async (formData: any) => {
        mutate(formData);
    };

    return (
        <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} />
                <input type="text" {...register("price")} />
                {/* <button type="submit">{<Save />}</button> */}
                <button type="submit">{isPending ? <Loader2 /> : <Save />}</button>
            </form>
        </div>
    );
};
export default ProductForm;
