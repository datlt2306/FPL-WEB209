import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../interfaces/product";
import { useEffect } from "react";
import { useAppDispatch } from "../app/hook";
import { fetchProduct } from "../slice/product";

type Props = {};

const ProductEdit = (props: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IProduct>();
    const dispatch = useAppDispatch();
    const { id } = useParams();

    const onSubmit: SubmitHandler<IProduct> = (data) => {
        //
    };
    useEffect(() => {
        (async () => {
            const { payload: product } = await dispatch(fetchProduct(id as string));
            reset(product as IProduct);
        })();
    }, [id]);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} />
                <input type="text" {...register("price")} />
            </form>
        </div>
    );
};

export default ProductEdit;
