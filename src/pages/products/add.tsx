import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ProductForm from "../../components/PrductForm";
import { Product } from "../../types/product";
import axios from "axios";
import { createProduct } from "../../api/product";

export function ProductAdd() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (data: Omit<Product, "id">) => {
        try {
            setIsLoading(true);

            toast.success("Product created successfully");
            navigate("/");
        } catch (error) {
            toast.error("Failed to create product");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
                <ProductForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>
        </div>
    );
}
export default ProductAdd;
