/* eslint-disable @typescript-eslint/no-explicit-any */

import { IProduct } from "@/common/types/product";
import { PlusOutlined } from "@ant-design/icons";
import instance from "@/configs/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, message, Popconfirm, Skeleton, Space, Table } from "antd";
import { Link } from "react-router-dom";

const ProductPage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const queryClient = useQueryClient();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: () => instance.get(`/products`),
    });

    const { mutate } = useMutation({
        mutationFn: async (id: number) => {
            try {
                return instance.delete(`/products/${id}`);
            } catch (error) {
                throw new Error(`Call API thất bại, thử lại sau!`);
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Xóa sản phẩm thành công!",
            });
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
        onError(error) {
            messageApi.open({
                type: "error",
                content: error.message,
            });
        },
    });

    if (isError) return <div>{error.message}</div>;
    const dataSource = data?.data.map((product: IProduct) => ({
        key: product.id,
        ...product,
    }));
    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Giá sản phẩm",
            dataIndex: "price",
            key: "price",
        },
        {
            id: "actions",
            render: (_: any, product: IProduct) => {
                return (
                    <Space>
                        <Popconfirm
                            title="Xóa sản phẩm"
                            description="Bạn có muốn xóa sản phẩm này không?"
                            onConfirm={() => mutate(product.id!)}
                            // onCancel={cancel}
                            okText="Có"
                            cancelText="Không"
                        >
                            <Button danger>Xóa</Button>
                        </Popconfirm>
                        <Link to={`/admin/products/${product.id}/edit`}>
                            <Button>Cập nhật</Button>
                        </Link>
                    </Space>
                );
            },
        },
    ];
    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-2xl font-medium">Quản lý sản phẩm</h1>
                <Link to="/admin/products/add">
                    <Button type="primary">
                        <PlusOutlined /> Thêm sản phẩm
                    </Button>
                </Link>
            </div>
            <Skeleton loading={isLoading} active>
                <Table dataSource={dataSource} columns={columns} />
            </Skeleton>
        </div>
    );
};

export default ProductPage;

// tạo danh sách sản phẩm: 10 field => 10 cột
// tạo danh sách user : 3 field => 3 cột
