/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/configs/axios";
import { Loading3QuartersOutlined, RollbackOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Checkbox, Form, FormProps, Input, message, Select, Skeleton } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Link, useParams } from "react-router-dom";
type FieldType = {
    name: string;
    categoryId?: string;
    price?: number;

    description: string;
    discount?: number;
    featured?: boolean;
    countInStock?: number;
};
const ProductEditPage = () => {
    const { id } = useParams();
    const [messageApi, contextHolder] = message.useMessage();
    const queryClient = useQueryClient();
    const {
        data: product,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["product", id],
        queryFn: () => instance.get(`/products/${id}`),
    });
    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: () => instance.get(`/categories`),
    });

    const { mutate, isPending } = useMutation({
        mutationFn: async (product: FieldType) => {
            try {
                return await instance.put(`/products/${id}`, product);
            } catch (error) {
                throw new Error(`Call API thất bại, vui lòng thử lại sau!`);
            }
        },

        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Cập nhật sản phẩm thành công!",
            });
            queryClient.invalidateQueries({
                queryKey: ["product"],
            });
        },
        onError: (error) => {
            messageApi.open({
                type: "error",
                content: error.message,
            });
        },
    });

    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        mutate(values);
    };
    if (isError) return <div>Error...</div>;
    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-2xl font-medium">Cập nhật sản phẩm</h1>
                <Link to="/admin/products">
                    <Button type="primary">
                        <RollbackOutlined />
                        Quay lại
                    </Button>
                </Link>
            </div>
            <Skeleton loading={isLoading}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ ...product?.data }}
                    onFinish={onFinish}
                    autoComplete="off"
                    disabled={isPending}
                >
                    <Form.Item<FieldType>
                        label="Tên sản phẩm"
                        name="name"
                        rules={[{ required: true, message: "Tên sản phẩm bắt buộc điền!" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Giá sản phẩm"
                        name="price"
                        rules={[{ required: true, message: "Giá sản phẩm bắt buộc điền!" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Danh mục"
                        name="categoryId"
                        rules={[{ required: true, message: "Bắt buộc chọn!" }]}
                    >
                        <Select
                            showSearch
                            placeholder="Chọn danh mục"
                            filterOption={(input, option) =>
                                (option?.label?.toString() ?? "")
                                    .toLowerCase()
                                    .includes(input.toLowerCase())
                            }
                            options={categories?.data.map((category: any) => ({
                                value: category.id,
                                label: category.name,
                            }))}
                        />
                    </Form.Item>

                    <Form.Item<FieldType> label="Mô sản phẩm" name="description">
                        <TextArea rows={5} />
                    </Form.Item>
                    <Form.Item<FieldType> label="Khuyến mại" name="discount">
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType> label="Số lượng" name="countInStock">
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        name="featured"
                        label="Sản phẩm nổi bật"
                        valuePropName="checked"
                    >
                        <Checkbox />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            {isPending && <Loading3QuartersOutlined className="animate-spin" />}{" "}
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Skeleton>
        </div>
    );
};

export default ProductEditPage;

/**
 * Lấy id
 * call api
 * fill vào form
 * submit form => cập nhật
 * hiển thông báo
 */
