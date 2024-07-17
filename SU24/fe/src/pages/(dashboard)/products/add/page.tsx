import instance from "@/configs/axios";
import { BackwardFilled, Loading3QuartersOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, FormProps, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Link } from "react-router-dom";

type FieldType = {
    name?: string;
    price?: number;
    description?: string;
};

const ProductAddPage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
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
        onError: (error) => {
            messageApi.open({
                type: "error",
                content: error.message,
            });
        },
    });
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        console.log("Success:", values);
        mutate(values);
    };
    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-2xl font-semibold">Thêm sản phẩm</h1>
                <Button type="primary">
                    <Link to={`/admin/products`}>
                        <BackwardFilled /> Quay lại
                    </Link>
                </Button>
            </div>
            <div className="max-w-4xl mx-auto">
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                >
                    <Form.Item<FieldType>
                        label="Tên sản phẩm"
                        name="name"
                        rules={[{ required: true, message: "Tên sản phẩm bắt buộc phải có!" }]}
                    >
                        <Input disabled={isPending} />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Giá sản phẩm"
                        name="price"
                        rules={[{ required: true, message: "Giá sản phẩm bắt buộc phải có!" }]}
                    >
                        <Input disabled={isPending} />
                    </Form.Item>
                    <Form.Item<FieldType> label="Mô tả sản phẩm" name="description">
                        <TextArea rows={4} disabled={isPending} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" disabled={isPending}>
                            {isPending ? (
                                <>
                                    <Loading3QuartersOutlined className="animate-spin mr-2" />
                                    Submit
                                </>
                            ) : (
                                "Submit"
                            )}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ProductAddPage;

// Tạo table hiển thị danh sách sản phẩm : 10 trường => 10 cột
// Tạo table hiển thị danh sách user : 3 trường => 3 cột
