import { IProduct } from "@/common/types/product";
import instance from "@/configs/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, message, Popconfirm, Space, Table } from "antd";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
type Props = {};

const ProductsPage = (props: Props) => {
    const [messageApi, contextHolder] = message.useMessage();
    const queryClient = useQueryClient();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: () => instance.get(`/products`),
    });

    const { mutate } = useMutation({
        mutationFn: async (id) => {
            try {
                return await instance.delete(`/products/${id}`);
            } catch (error) {
                throw new Error((error as any).message);
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
        onError: (error) => {
            messageApi.open({
                type: "error",
                content: error.message,
            });
        },
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{error.message}</div>;

    // Định nghĩa dữ liệu truyền vào table
    const dataSource = data?.data?.data.map((product: IProduct) => ({
        key: product._id,
        ...product,
    }));
    // Định nghĩa các cột truyền vào table
    const columns = [
        { key: "name", dataIndex: "name", title: "Tên" },
        { key: "price", dataIndex: "price", title: "Giá" },
        { key: "quantity", dataIndex: "quantity", title: "Số lượng" },
        {
            key: "featured",
            dataIndex: "featured",
            title: "Nổi bật",
            render: (_: any, product: IProduct) => <span>{product.featured ? "Có" : "không"}</span>,
        },
        { key: "countInStock", dataIndex: "countInStock", title: "Tình trạng" },
        {
            key: "actions",
            render: (_: any, product: any) => {
                const { key } = product;
                return (
                    <Space>
                        <Popconfirm
                            title="Xóa sản phẩm"
                            description="Bạn có chắc muốn xóa sản phẩm này?"
                            onConfirm={() => mutate(key)}
                            okText="Có"
                            cancelText="Không"
                        >
                            <Button danger>Xóa</Button>
                        </Popconfirm>
                        <Button>
                            <Link to={`/admin/products/${key}/edit`}>Cập nhật</Link>
                        </Button>
                    </Space>
                );
            },
        },
    ];
    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-xl">Quản lý sản phẩm</h1>
                <Link to="/admin/products/add">
                    <Button type="primary">
                        <AiFillPlusCircle /> Thêm
                    </Button>
                </Link>
            </div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default ProductsPage;

/**
 * SERVER ( API )
 * | - GET/products
 * setState
 * |
 * render
 */
