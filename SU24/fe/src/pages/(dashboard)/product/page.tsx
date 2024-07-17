import { IProduct } from "@/common/types/product";
import { getAllProducts, removeProduct } from "@/services/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, message, Popconfirm, Table } from "antd";
import { useEffect, useState } from "react";

const ProductPage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const queryClient = useQueryClient();
    const { data, isLoading, isError } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            return await getAllProducts();
        },
    });
    const { mutate } = useMutation({
        // Xóa item trong list
        mutationFn: async (product: IProduct) => {
            try {
                const response = await removeProduct(product);
                return response;
            } catch (error) {
                throw error;
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Xóa sản phẩm thành công",
            });
        },
        onError: (error) => {
            messageApi.open({
                type: "error",
                content: error.message,
            });
        },
    });
    const dataSource = data?.data.map((item: IProduct) => {
        return {
            key: item.id,
            ...item,
        };
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
            title: "Hành động",
            key: "action",
            render: (_: any, product: IProduct) => {
                return (
                    <Popconfirm
                        title="Xóa sản phẩm"
                        description="Bạn có chắc chắn muốn xóa không?"
                        onConfirm={() => mutate(product)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="primary" danger>
                            Xóa
                        </Button>
                    </Popconfirm>
                );
            },
        },
    ];

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;
    return (
        <div>
            {contextHolder}
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default ProductPage;
