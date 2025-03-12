import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ProductForm from "../../components/PrductForm";
import { Product } from "../../types/product";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export function ProductAdd() {
    const navigate = useNavigate();
    // const [isLoading, setIsLoading] = React.useState(false);
    const { mutate } = useMutation({
        mutationFn: async (data: any) => {
            return await axios.post(`http://localhost:3000/products`, data);
        },
        onSuccess: () => {
            toast.success("Product created successfully");
            navigate("/products");
        },
        onError: (error: any) => {
            return toast.error(error?.response?.data?.message || "Something went wrong");
        },
    });

    const handleSubmit = async (data: Omit<Product, "id">) => {
        mutate(data);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
                <ProductForm onSubmit={handleSubmit} />
            </div>
        </div>
    );
}
export default ProductAdd;
