import { IProduct } from "@/common/types/product";
import instance from "@/configs/axios";
import { getAllProducts, removeProduct } from "@/services/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { DataTable } from "./_components/DataTable";
import { columns } from "./_components/Columns";

const ProductPage = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, isFetching, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: () => instance.get("/products"),
    });
    const { mutate } = useMutation({
        mutationFn: async (id: number) => {
            const confirm = window.confirm(`Bạn có chắc chắn muốn xóa không?`);
            if (!confirm) return;
            await instance.delete(`/products/${id}`);
        },
        // làm mới lại API
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });
    if (isLoading || isFetching) return <div>Loading...</div>;
    if (isError) return <div>{error.message}</div>;
    return (
        <div>
            <DataTable columns={columns} data={data?.data} />
        </div>
    );
};

export default ProductPage;
