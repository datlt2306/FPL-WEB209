import instance from "@/configs/axios";
import { BackwardFilled, Loading3QuartersOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Checkbox, Form, FormProps, Input, InputNumber, message, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Link } from "react-router-dom";

type FieldType = {
    id: number | string;
    name: string;
    categoryId?: string;
    price: number;

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
        error,
    } = useQuery({
        queryKey: ["categories"],
        queryFn: () => instance.get("/categories"),
    });
    const { mutate, isPending } = useMutation({
        mutationFn: async (product: FieldType) => {
            try {
                return await instance.post(`/products`, product);
            } catch (error) {
                throw new Error(`Thêm sản phẩm thất bại`);
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Thêm sản phẩm thành công",
            });

            form.resetFields();
        },
        onError(error) {
            messageApi.open({
                type: "error",
                content: error.message,
            });
        },
    });
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        mutate(values);
    };
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{error.message}</div>;
    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="font-semibold text-2xl">Thêm sản phẩm</h1>
                <Button type="primary">
                    <Link to="/admin/products">
                        <BackwardFilled /> Quay lại
                    </Link>
                </Button>
            </div>
            <div className="max-w-3xl mx-auto">
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    initialValues={{ featured: false }}
                    disabled={isPending}
                >
                    <Form.Item<FieldType>
                        label="Tên sản phẩm"
                        name="name"
                        rules={[{ required: true, message: "Tên sản phẩm bắt buộc phải điền" }]}
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
                            optionFilterProp="label"
                            options={categories?.data.map((category: any) => ({
                                value: category.id,
                                label: category.name,
                            }))}
                        />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Giá sản phẩm"
                        name="price"
                        rules={[{ required: true, message: "Giá sản phẩm bắt buộc phải điền" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType> label="Số lượng sản phẩm" name="countInStock">
                        <InputNumber defaultValue={0} />
                    </Form.Item>
                    <Form.Item<FieldType> label="Khuyến mại" name="discount">
                        <InputNumber defaultValue={0} />
                    </Form.Item>
                    <Form.Item<FieldType> label="Mô tả" name="description">
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Sản phẩm nổi bật"
                        name="featured"
                        valuePropName="checked"
                    >
                        <Checkbox />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            {isPending && <Loading3QuartersOutlined spin />} Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ProductAddPage;
