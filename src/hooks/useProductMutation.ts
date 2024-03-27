import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../interfaces/Product";
import { addProduct, editProduct, removeProduct } from "../services/product";
type Inputs = {
    name: string;
    price: number;
};

type useProductMutationProps = {
    action: "CREATE" | "DELETE" | "UPDATE"
}

const useProductMutation = ({ action }: useProductMutationProps) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const form = useForm<Inputs>();

    const { mutate, ...rest } = useMutation({
        mutationFn: async (product: IProduct) => {
            switch (action) {
                case "CREATE":
                    return await addProduct(product);
                case "DELETE":
                    return window.confirm('Bạn có chắc chắn không?') && await removeProduct(product.id!)
                case "UPDATE":
                    return await editProduct(product);
                default:
                    return null;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"],
            });
        },
        onError: (error) => {
            console.log(error);
        },
    });
    const onSubmit: SubmitHandler<Inputs> = async (product) => {
        mutate(product);
        navigate("/");
    };

    return { mutate, form, onSubmit, ...rest }
}

export default useProductMutation