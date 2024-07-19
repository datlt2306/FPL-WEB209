import { IProduct } from "@/common/types/product";
import instance from "@/configs/axios";
import { PlusCircleFilled } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, message, Popconfirm, Table } from "antd";
import { Link } from "react-router-dom";

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
    const createFilters = (products: IProduct[]) => {
        return products
            .map((product: IProduct) => product.name)
            .filter((value: string, index: number, self: string[]) => self.indexOf(value) === index)
            .map((name: string) => ({ text: name, value: name }));
    };
    // tạo cột cho table
    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
            filterSearch: true,
            filters: data ? createFilters(data.data) : [],
            onFilter: (value: string, product: IProduct) => product.name.includes(value),
            sorter: (a: IProduct, b: IProduct) => a.name.localeCompare(b.name),
            sortDirections: ["ascend", "descend"],
        },
        {
            title: "Giá sản phẩm",
            dataIndex: "price",
            key: "price",
            sorter: (a: IProduct, b: IProduct) => a.price - b.price,
        },
        {
            dataIndex: "action",
            width: 250,
            render: (_: any, product: any) => (
                <div className="flex space-x-3">
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
                    <Button>
                        <Link to={`/admin/products/${product.id}/edit`}>Cập nhật</Link>
                    </Button>
                </div>
            ),
        },
    ];
    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="font-semibold text-2xl">Quản lý sản phẩm</h1>
                <Button type="primary">
                    <Link to="/admin/products/add">
                        <PlusCircleFilled /> Thêm sản phẩm
                    </Link>
                </Button>
            </div>
            <Table
                dataSource={dataSource}
                columns={columns}
                showSorterTooltip={{ target: "sorter-icon" }}
            />
        </div>
    );
};

export default ProductPage;
