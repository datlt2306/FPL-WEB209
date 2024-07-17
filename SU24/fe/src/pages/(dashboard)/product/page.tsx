import { IProduct } from "@/common/types/product";
import { getAllProducts, removeProduct } from "@/services/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Popconfirm, Table } from "antd";
import { useEffect, useState } from "react";

const ProductPage = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, isError } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            return await getAllProducts();
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
            render: () => {
                return (
                    <Popconfirm
                        title="Xóa sản phẩm"
                        description="Bạn có chắc chắn muốn xóa không?"
                        // onConfirm={confirm}
                        // onCancel={cancel}
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

    const { mutate } = useMutation({
        // Xóa item trong list
        mutationFn: async (product: IProduct) => {
            const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
            if (!confirm) return;
            try {
                const response = await removeProduct(product);
                if (response.status !== 200) return alert("Xóa thất bại");
                alert(`Xóa thành công`);
                queryClient.invalidateQueries({
                    queryKey: ["products"],
                });
            } catch (error) {
                return error;
            }
        },
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />;
        </div>
    );
};

export default ProductPage;
