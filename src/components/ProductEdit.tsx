import { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useProductMutation } from "../hooks/useProductMutation";
import useProductQuery from "../hooks/useProductQuery";

type FormValue = {
    name: string;
    price: number;
    desc: string;
};

const ProductEdit = () => {
    const { id } = useParams();
    const { data } = useProductQuery(id);
    const { form, onSubmit } = useProductMutation({
        action: "UPDATE",
    });
    useEffect(() => {
        // fill dữ liệu vào form
        form.reset(data);
    }, [id, form.reset, data]);
    return (
        <div>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <input type="text" {...form.register("name", { required: true })} />
                <input type="number" {...form.register("price")} />
                <input type="desc" {...form.register("desc", { required: true })} />
                <button>Theem</button>
            </form>
        </div>
    );
};

export default ProductEdit;
