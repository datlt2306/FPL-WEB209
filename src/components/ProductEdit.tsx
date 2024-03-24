import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../services/product";

type Inputs = {
    name: string;
    price: number;
};
const ProductEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();

    useEffect(() => {
        (async () => {
            const data = await getProduct(id!);
            // fill dữ liệu vào form
            reset(data);
        })();
    }, [id]);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        navigate("/products");
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
                <button>Thêm</button>
            </form>
        </div>
    );
};

export default ProductEdit;
