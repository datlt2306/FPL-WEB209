import useProductMutation from "../hooks/useProductMutation";

const ProductAdd = () => {
    const { form, onSubmit, isPending } = useProductMutation({
        action: "CREATE",
    });
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
                <button>{isPending ? "Đang thêm" : "Thêm"}</button>
            </form>
        </div>
    );
};

export default ProductAdd;
