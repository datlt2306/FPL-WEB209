import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../services/product";
import { IProduct } from "../interfaces/Product";

type Inputs = {
    name: string;
    price: number;
};
const ProductAdd = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const { mutate, isPending } = useMutation({
        mutationFn: async (product: IProduct) => {
            return await addProduct(product);
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
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Tên sản phẩm"
                    {...register("name", { required: true })}
                />
                {errors.name && <span>Trường name là bắt buộc</span>}
                <input type="number" placeholder="Giá sản phẩm" {...register("price")} />
                <button>{isPending ? "Đang thêm" : "Thêm"}</button>
            </form>
        </div>
    );
};

export default ProductAdd;
