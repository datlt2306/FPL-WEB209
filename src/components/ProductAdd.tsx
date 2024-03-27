import { useProductMutation } from "../hooks/useProductMutation";

const ProductAdd = () => {
    const { form, onSubmit, isPending } = useProductMutation({
        action: "CREATE",
    });
    return (
        <div>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <input type="text" {...form.register("name", { required: true })} />
                {form.formState.errors.name && <span>This field is required</span>}
                <input type="number" {...form.register("price")} />
                <input type="desc" {...form.register("desc", { required: true })} />
                <button>{isPending ? "Đang thêm" : "Thêm sản phẩm"}</button>
            </form>
        </div>
    );
};

export default ProductAdd;
