/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Image, message, Popconfirm, Skeleton, Space, Table, Tag } from "antd";
import { Link } from "react-router-dom";

const AdminProductsPage = () => {
    const queryClient = useQueryClient();
    const [messageApi, contextHolder] = message.useMessage();
    const { data, isLoading } = useQuery({
        queryKey: ["PRODUCTS_KEY"],
        queryFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
            const data = await response.json();
            console.log(data.data);
            return data.data.map((item: any) => ({
                key: item._id,
                ...item,
            }));
        },
    });

    console.log("data", data);
    const { mutate } = useMutation({
        mutationFn: async (id: number) => {
            await fetch(`${import.meta.env.VITE_API_URL}/${id}`, { method: "DELETE" });
        },
        onSuccess: () => {
            messageApi.success("Xóa sản phẩm thành công");
            // rerender - call lại API
            queryClient.invalidateQueries({
                queryKey: ["PRODUCTS_KEY"],
            });
        },
    });

    const columns = [
        {
            title: "Ảnh",
            dataIndex: "imageUrl",
            key: "imageUrl",
            width: 100,
            render: (text: string) => {
                return <Image width={50} height={50} src={text} />;
            },
        },
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
            title: "Tình trạng",
            dataIndex: "inStock",
            key: "inStock",
            render: (inStock: boolean) => {
                return inStock ? (
                    <Tag color="green">Còn Hàng</Tag>
                ) : (
                    <Tag color="red">Hết Hàng</Tag>
                );
            },
        },
        {
            title: "Danh mục",
            dataIndex: "category",
            key: "category",
        },
        {
            key: "action",
            width: 200,
            render: (_: any, item: any) => {
                return (
                    <Space>
                        <Popconfirm
                            title="Xóa sản phẩm"
                            description="Bạn có chắc chắn muốn xóa không?"
                            onConfirm={() => mutate(item.id)}
                            okText="Có"
                            cancelText="Không"
                        >
                            <Button type="primary" danger>
                                Xóa
                            </Button>
                        </Popconfirm>

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
            {contextHolder}
            <div className="flex items-center justify-between  mb-5">
                <h1 className="text-3xl font-semibold">Quản lý sản phẩm</h1>
                <Link to="/admin/products/add">
                    <Button type="default">Thêm sản phẩm</Button>
                </Link>
            </div>

            <Skeleton loading={isLoading} active>
                <Table dataSource={data} columns={columns} />;
            </Skeleton>
        </div>
    );
};

export default AdminProductsPage;
/**
 * 1. client state và server state là gì? khi nào sử dụng?
 * 2. useQuery ( queryKey, queryFn) là gì?
 * 3. Code lại bài hôm nay
 */
