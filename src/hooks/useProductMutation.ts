import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IProduct } from "../interfaces/Product";
import { createProduct, removeProduct, updateProduct } from "../services/product";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormValue = {
    name: string;
    price: number;
    desc: string;
};

type useProductMutationProps = {
    action: "CREATE" | "UPDATE" | "DELETE";
};

export const useProductMutation = ({ action }: useProductMutationProps) => {
    const queryClient = useQueryClient();
    const form = useForm<FormValue>();
    const navigate = useNavigate();

    const { mutate, ...rest } = useMutation({
        mutationFn: async (product: IProduct) => {
            switch (action) {
                case "CREATE":
                    return await createProduct(product);
                case "UPDATE":
                    return await updateProduct(product);
                case "DELETE":
                    return window.confirm('Are you sure?') && await removeProduct(product);
                default:
                    return null
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
            navigate("/products");
        }
    });

    const onSubmit: SubmitHandler<FormValue> = async (product) => {
        mutate(product);

    };


    return { mutate, form, onSubmit, ...rest }
}