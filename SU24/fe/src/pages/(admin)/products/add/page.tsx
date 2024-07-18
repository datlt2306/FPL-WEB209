/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/configs/axios";
import { Loading3QuartersOutlined, RollbackOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Checkbox, Form, FormProps, Input, message, Select, Skeleton } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Link } from "react-router-dom";
type FieldType = {
    name: string;
    categoryId?: string;
    price?: number;

    description: string;
    discount?: number;
    featured?: boolean;
    countInStock?: number;
};
const ProductAddPage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const {
        data: categories,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["categories"],
        queryFn: () => instance.get(`/categories`),
    });

    const { mutate, isPending } = useMutation({
        mutationFn: async (product: FieldType) => {
            try {
                return await instance.post(`/products`, product);
            } catch (error) {
                throw new Error(`Call API thất bại, vui lòng thử lại sau!`);
            }
        },

        onSuccess: () => {
            form.resetFields();
            messageApi.open({
                type: "success",
                content: "Thêm sản phẩm thành công!",
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
                <h1 className="text-2xl font-medium">Thêm sản phẩm</h1>
                <Link to="/admin/products">
                    <Button type="primary">
                        <RollbackOutlined />
                        Quay lại
                    </Button>
                </Link>
            </div>
            <Skeleton loading={isLoading} active>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
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

export default ProductAddPage;

// form
// Lấy giá trị của form
// submit
// call api
// hiển thị message
// reset form
