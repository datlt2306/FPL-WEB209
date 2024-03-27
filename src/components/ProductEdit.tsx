import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProductMutation from "../hooks/useProductMutation";
import useProductQuery from "../hooks/useProductQuery";

const ProductEdit = () => {
    const { id } = useParams();
    const { data, isLoading } = useProductQuery(id);
    const { form, onSubmit } = useProductMutation({
        action: "UPDATE",
    });
    // fill nội dung vào form
    useEffect(() => {
        data && form.reset(data);
    }, [id, form.reset, data]);
    if (isLoading) return <div>Loading...</div>;
    return (
        <div>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Tên sản phẩm"
                    {...form.register("name", { required: true })}
                />
                {form.formState.errors.name && <span>Trường name là bắt buộc</span>}
                <input type="number" placeholder="Giá sản phẩm" {...form.register("price")} />
                <button>Thêm</button>
            </form>
        </div>
    );
};

export default ProductEdit;
