import { IProduct } from "@/common/types/product";
import instance from "@/configs/axios";
import { PlusCircleFilled } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, message, Popconfirm, Skeleton, Table } from "antd";
import { Loader2Icon } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {};

const ProductManagementPage = (props: Props) => {
    const [messageApi, contextHolder] = message.useMessage();
    const queryClient = useQueryClient();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            try {
                return await instance.get(`/products`);
            } catch (error) {
                throw new Error("Network failed");
            }
        },
    });
    console.log("data", data?.data?.data);
    const { mutate, isPending } = useMutation({
        mutationFn: async (id: number) => {
            try {
                return await instance.delete(`/products/${id}`);
            } catch (error) {
                throw new Error(`Xóa sản phẩm thất bại. Vui lòng thử lại sau!`);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
            messageApi.open({
                type: "success",
                content: "Xóa sản phẩm thành công!",
            });
        },
        onError: (error) => {
            messageApi.open({
                type: "success",
                content: error.message,
            });
        },
    });

    if (isError) return <div>{error.message}</div>;
    const createFilters = (products: IProduct[]) => {
        return products
            .map((product: IProduct) => product.name)
            .filter((value: string, index: number, self: string[]) => self.indexOf(value) === index)
            .map((name: string) => ({ text: name, value: name }));
    };
    const dataSource = data?.data?.data.map((product: IProduct) => ({
        key: product._id,
        ...product,
    }));
    const columns = [
        {
            key: "name",
            dataIndex: "name",
            title: "Tên sản phẩm",
            filterSearch: true,
            filters: data ? createFilters(data?.data?.data) : [],
            onFilter: (value: string, product: IProduct) => product.name.includes(value),
            sorter: (a: IProduct, b: IProduct) => a.name.localeCompare(b.name),
            sortDirections: ["ascend", "descend"],
        },
        { key: "price", dataIndex: "price", title: "Giá sản phẩm" },
        {
            key: "action",
            render: (_: any, product: any) => {
                return (
                    <div className="flex space-x-2">
                        <Popconfirm
                            title="Xóa sản phẩm"
                            description="Bạn chắc chắn muốn xóa không?"
                            onConfirm={() => mutate(product._id)}
                            // onCancel={cancel}
                            okText="Có"
                            cancelText="Không"
                        >
                            {isPending ? (
                                <>
                                    <Button danger>
                                        <Loader2Icon className="animate-spin" />
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button danger>Delete</Button>
                                </>
                            )}
                        </Popconfirm>
                        <Button>
                            <Link to={`/admin/products/${product._id}/edit`}>Cập nhật</Link>
                        </Button>
                    </div>
                );
            },
        },
    ];
    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-2xl font-semibold">Quản lý sản phẩm</h1>
                <Button type="primary">
                    <Link to="/admin/products/add">
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

export default ProductManagementPage;
