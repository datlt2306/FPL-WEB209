/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Space, Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const AdminProductsPage = () => {
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery({
        queryKey: ["PRODUCTS_KEY"],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3000/products`);
            const data = await response.json();

            return data.map((item: any) => ({
                key: item.id,
                ...item,
            }));
        },
    });
    const { mutate } = useMutation({
        mutationFn: async (id: number) => {
            await fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" });
        },
        onSuccess: () => {
            alert("Xóa thành công");
            // rerender - call lại API
            queryClient.invalidateQueries({
                queryKey: ["PRODUCTS_KEY"],
            });
        },
    });

    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Giá",
            dataIndex: "price",
            key: "price",
        },
        {
            key: "action",
            render: (_: any, item: any) => {
                return (
                    <Space>
                        <Button type="primary" danger onClick={() => mutate(item.id)}>
                            Xóa
                        </Button>
                        <Link to={`/admin/${item.id}/edit`}>
                            <Button type="primary">Cập nhật</Button>
                        </Link>
                    </Space>
                );
            },
        },
    ];
    return (
        <div>
            <h1>Quản lý sản phẩm</h1>
            <Table dataSource={data} columns={columns} />;
        </div>
    );
};

export default AdminProductsPage;
/**
 * 1. client state và server state là gì? khi nào sử dụng?
 * 2. useQuery ( queryKey, queryFn) là gì?
 * 3. Code lại bài hôm nay
 */
