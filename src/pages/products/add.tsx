import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useNavigate, useParams } from "react-router-dom";
import { Save, X, Loader2 } from "lucide-react";
import { productApi } from "../services/productApi";
import { productSchema } from "../../validation/productSchema";
import { ProductFormData } from "../../types/product";
import axios from "axios";
import { createProduct } from "../../api/product";

export const ProductForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ProductFormData>({
        resolver: joiResolver(productSchema),
    });

    useEffect(() => {
        const loadProduct = async () => {
            if (!id) return;

            try {
                setIsLoading(true);
                setError(null);
                const product = await productApi.getProduct(Number(id));
                reset(product);
            } catch (err) {
                setError("Không thể tải thông tin sản phẩm");
            } finally {
                setIsLoading(false);
            }
        };

        loadProduct();
    }, [id, reset]);

    const onSubmit = async (data: ProductFormData) => {
        try {
            setIsLoading(true);
            setError(null);

            if (id) {
                // await productApi.updateProduct(Number(id), data);
                await axios.put(`http://localhost:3000/products/${id}`, data);
            } else {
                await productApi.createProduct(data);
            }

            navigate("/");
        } catch (err) {
            setError(id ? "Không thể cập nhật sản phẩm" : "Không thể tạo sản phẩm");
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
                {id ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm mới"}
            </h1>

            {error && <div className="bg-red-50 text-red-600 p-4 rounded-md mb-4">{error}</div>}

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 bg-white p-6 rounded-lg shadow"
            >
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                    <input
                        {...register("name")}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Giá</label>
                    <input
                        {...register("price")}
                        type="number"
                        step="0.01"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    {errors.price && (
                        <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
                    )}
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                        <X className="h-4 w-4 mr-2" />
                        Hủy
                    </button>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
                    >
                        <Save className="h-4 w-4 mr-2" />
                        {isLoading ? "Đang lưu..." : "Lưu"}
                    </button>
                </div>
            </form>
        </div>
    );
};
