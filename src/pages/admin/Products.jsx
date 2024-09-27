import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Skeleton, Table, Image, Button, message, Popconfirm } from "antd";
import axios from "axios";

const ProductsAdminPage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const queryClient = useQueryClient();
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
            await axios.delete(`http://localhost:3000/products/${id}`);
        },
        onSuccess: () => {
            messageApi.success("Xóa sản phẩm thành công");
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });
    const columns = [
        {
            title: "Ảnh",
            key: "imageUrl",
            dataIndex: "imageUrl",
            render: (imageUrl) => {
                return <Image width={50} src={imageUrl} />;
            },
        },
        {
            title: "Tên",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Danh mục",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Giá",
            dataIndex: "price",
            key: "price",
            render: (value) => {
                return <strong>{value}</strong>;
            },
        },
        {
            title: "Tình trạng",
            dataIndex: "available",
            key: "available",
            render: (available) => <div>{available ? "Còn hàng" : "Hết hàng"}</div>,
        },
        {
            title: "Loại hàng",
            dataIndex: "type",
            key: "type",
            render: (type) => <div>{type === "type1" ? "Hàng cũ" : "Hàng mới"}</div>,
        },
        {
            key: "action",
            render: (_, item) => (
                <div className="w-20 flex space-x-4">
                    <Popconfirm
                        title="Xóa sản phẩm"
                        description="Bạn có chắc chắn xóa item này không?"
                        onConfirm={() => mutate(item.id)}
                        okText="Đồng ý"
                        cancelText="Không"
                    >
                        <Button danger>Xóa</Button>
                    </Popconfirm>

                    <Button type="primary">Cập nhật</Button>
                </div>
            ),
        },
    ];
    return (
        <div>
            {contextHolder}
            <h1 className="text-3xl mb-5">Quản lý sản phẩm</h1>
            <Skeleton loading={isLoading} active>
                <Table dataSource={data} columns={columns} />
            </Skeleton>
        </div>
    );
};
// {ProductsAdminPage.map((product, index) => {
//     console.log(product)
// })}

export default ProductsAdminPage;

/**
 * B1: click vào button để lấy id của sản phẩm
 * B2: confirm xóa sản phẩm
 * B3: Sử dụng useMutation để xóa sản phẩm
 * B4: Thông báo xóa thành công
 * B5: Cập nhật lại danh sách sản phẩm sau khi xóa thành công
 */
