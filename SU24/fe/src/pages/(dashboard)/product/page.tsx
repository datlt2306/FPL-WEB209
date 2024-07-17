import instance from "@/configs/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, message, Popconfirm, Table } from "antd";

const ProductPage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const queryClient = useQueryClient();
    const { data } = useQuery({
        queryKey: ["products"],
        queryFn: () => instance.get("/products"),
    });
    const mutation = useMutation({
        mutationFn: async (id) => {
            try {
                return await instance.delete(`/products/${id}`);
            } catch (error) {
                throw error;
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Xóa sản phẩm thành công",
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

    // chuyển data từ api về dạng mảng object
    const dataSource = data?.data.map((item: any) => ({
        key: item.id,
        ...item,
    }));
    // tạo cột cho table
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
            dataIndex: "action",
            render: (_: any, product: any) => (
                <Popconfirm
                    title="Xóa sản phẩm"
                    description="Bạn có chắc muốn xóa sản phẩm này không?"
                    onConfirm={() => mutation.mutate(product.id)}
                    // onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type="primary" danger>
                        Xóa
                    </Button>
                </Popconfirm>
            ),
        },
    ];

    // if (isLoading || isFetching) return <div>Loading...</div>;
    // if (isError) return <div>Error: {error.message}</div>;
    // if (mutation?.isError) return <div>Error: {mutation.error.message}</div>;
    return (
        <div>
            {contextHolder}
            <Table dataSource={dataSource} columns={columns} />;
        </div>
    );
};

export default ProductPage;
