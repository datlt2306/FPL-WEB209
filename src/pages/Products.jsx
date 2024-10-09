import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Image, message, Skeleton, Table } from "antd";
import axios from "axios";

const Products = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const queryClient = useQueryClient();
    const userId = JSON.parse(localStorage.getItem("userId") || "{}");
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
        mutationFn: async (product) => {
            await axios.post(`http://localhost:3000/carts/${userId}`, product);
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
                    <Button onClick={() => mutate({ productId: item.id, quantity: 1 })}>
                        Add to cart
                    </Button>
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
export default Products;
