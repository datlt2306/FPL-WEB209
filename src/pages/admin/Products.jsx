import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Image, message, Popconfirm, Skeleton, Space, Table } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminProductsPage = () => {
    const queryClient = useQueryClient();
    const [messageApi, contextHolder] = message.useMessage();
    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:3000/products`);
            return response.data.map((product) => ({
                key: product.id,
                ...product,
            }));
        },
    });
    const { mutate } = useMutation({
        mutationFn: async (id) => {
            return await axios.delete(`http://localhost:3000/products/${id}`);
        },
        onSuccess: () => {
            messageApi.success("Xóa sản phẩm thành công");
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
        onError: (error) => {
            messageApi.error("Xóa sản phẩm không thành công", error.message);
        },
    });
    const onHandleRemove = (id) => {
        mutate(id);
    };
    const columns = [
        {
            title: "Ảnh",
            dataIndex: "imageUrl",
            key: "imageUrl",
            render: (_, item) => {
                return <Image width={50} src={item.imageUrl} />;
            },
        },
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Danh mục",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "Giá",
            key: "price",
            dataIndex: "price",
        },
        {
            title: "Tình trạng",
            dataIndex: "available",
            key: "available",
            render: (_, item) => {
                return <span>{item.available ? "Còn hàng" : "Hết hàng"}</span>;
            },
        },
        {
            title: "Loại hàng",
            key: "type",
            dataIndex: "type",
            render: (type) => {
                return <span>{type === "type1" ? "Hàng cũ" : "Hàng mới"}</span>;
            },
        },
        {
            key: "action",
            render: (_, item) => (
                <div className="w-20">
                    <Space width="150">
                        <Popconfirm
                            title="Xóa sản phẩm"
                            description="Bạn có chắc chắn muốn xóa sản phẩm này không?"
                            onConfirm={() => onHandleRemove(item.id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button variant="solid" color="danger">
                                Xóa
                            </Button>
                        </Popconfirm>
                        <Link to={`/admin/products/${item.id}/edit`}>
                            <Button variant="solid" color="primary">
                                Cập nhật
                            </Button>
                        </Link>
                    </Space>
                </div>
            ),
        },
    ];

    return (
        <>
            {contextHolder}
            <h1 className="text-3xl mb-5">Quản lý sản phẩm</h1>
            <Skeleton active loading={isLoading}>
                <Table columns={columns} dataSource={data} />
            </Skeleton>
        </>
    );
};
export default AdminProductsPage;

/**
 * Xóa sản phẩm:
 * Bước 1: Click vào button, lấy được id sản phẩm
 * Bước 2: Hiển thị confirm xác nhận xóa sản phẩm
 * Bước 3: Sử useMutation để gọi API xóa sản phẩm dựa trên id vừa có
 * Bước 4: Nếu thành công thì hiển thị message, ngược lại hiển thị message lỗi
 * Bước 5: Cập nhật lại (refetching) danh sách sản phẩm
 */
