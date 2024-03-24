import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct, getProduct } from "../services/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IProduct } from "../interfaces/Product";

type Inputs = {
    name: string;
    price: number;
};
const ProductEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();

    const { data, isLoading } = useQuery({
        queryKey: ["PRODUCT_KEY", id],
        queryFn: async () => await getProduct(id!),
    });

    const { mutate } = useMutation({
        mutationFn: async (product: IProduct) => {
            return await editProduct(product);
        },
        onSuccess: () => {
            // refetching
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"],
            });
        },
    });

    // fill nội dung vào form
    useEffect(() => {
        data && reset(data);
    }, [id, reset, data]);

    const onSubmit: SubmitHandler<Inputs> = (product) => {
        mutate(product);
        navigate("/");
    };
    if (isLoading) return <div>Loading...</div>;
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
                <button>Thêm</button>
            </form>
        </div>
    );
};

export default ProductEdit;
