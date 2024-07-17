import instance from "@/configs/axios";
import { BackwardFilled, Loading3QuartersOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, FormProps, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { Link } from "react-router-dom";
type FieldType = {
    name?: string;
    price?: number;
    description?: string;
};

const ProductAddPage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationFn: async (product: FieldType) => {
            try {
                return await instance.post(`/products`, product);
            } catch (error) {
                throw new Error(`Call api thất bại. Vui lòng thử lại sau!`);
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Tạo sản phẩm thành công!",
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
        mutate(values);
    };
    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-2xl font-semibold">Thêm sản phẩm</h1>
                <Button type="primary">
                    <Link to="/admin/products">
                        <BackwardFilled /> Quay lại
                    </Link>
                </Button>
            </div>
            <div className="max-w-2xl mx-auto">
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    // initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Tên sản phẩm"
                        name="name"
                        rules={[{ required: true, message: "Tên sản phẩm bắt buộc phải nhập!" }]}
                    >
                        <Input disabled={isPending} />
                    </Form.Item>
                    <Form.Item
                        label="Giá sản phẩm"
                        name="price"
                        rules={[{ required: true, message: "Tên sản phẩm bắt buộc phải nhập!" }]}
                    >
                        <Input disabled={isPending} />
                    </Form.Item>
                    <Form.Item label="Mô tả sản phẩm" name="description">
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            {isPending ? (
                                <>
                                    <Loading3QuartersOutlined className="animate-spin" /> Submit
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
