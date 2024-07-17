import { IProduct } from "@/common/types/product";
import SkeletonTable from "@/components/SkeletonTable";
import instance from "@/configs/axios";
import { PlusCircleFilled } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, message, Popconfirm, Skeleton, Table } from "antd";
import { Link } from "react-router-dom";

const ProductPage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const queryClient = useQueryClient();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            try {
                return await instance.get(`/products`);
            } catch (error) {
                throw new Error("Call API thất bại");
            }
        },
    });
    const { mutate } = useMutation({
        mutationFn: async (id: number) => {
            try {
                return await instance.delete(`/products/${id}`);
            } catch (error) {
                throw new Error("Xóa sản phẩm thất bại");
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Sản phẩm đã được xóa thành công",
            });
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
        onError: (error) => {
            messageApi.open({
                type: "success",
                content: error.message,
            });
        },
    });
    const dataSource = data?.data.map((product: IProduct) => ({
        key: product.id,
        ...product,
    }));
    const columns = [
        {
            key: "name",
            title: "Tên sản phẩm",
            dataIndex: "name",
        },
        {
            key: "price",
            title: "Giá sản phẩm",
            dataIndex: "price",
        },
        {
            key: "action",
            render: (_: any, product: IProduct) => {
                return (
                    <div className="flex space-x-3">
                        <Popconfirm
                            title="Xóa sản phẩm"
                            description="Bạn có chắc chắn muốn xóa không?"
                            onConfirm={() => mutate(product.id!)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button danger>Delete</Button>
                        </Popconfirm>
                        <Button>
                            <Link to={`/admin/products/${product.id}/edit`}>Cập nhật</Link>
                        </Button>
                    </div>
                );
            },
        },
    ];
    if (isError) return <div>{error.message}</div>;
    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-2xl font-semibold">Quản lý sản phẩm</h1>
                <Button type="primary">
                    <Link to={`/admin/products/add`}>
                        <PlusCircleFilled /> Thêm sản phẩm
                    </Link>
                </Button>
            </div>
            <Skeleton loading={isLoading} active>
                <Table dataSource={dataSource} columns={columns} />
            </Skeleton>
        </div>
    );
};

export default ProductPage;
