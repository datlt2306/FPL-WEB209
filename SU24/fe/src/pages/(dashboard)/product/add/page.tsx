import { IProduct } from "@/common/types/product";
import instance from "@/configs/axios";
import { BackwardFilled } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, FormProps, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { Link } from "react-router-dom";

type FieldType = {
    name?: string;
    price?: string;
    description?: string;
};

const ProductAddPage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const { mutate } = useMutation({
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
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Tên sản phẩm"
                        name="name"
                        rules={[{ required: true, message: "Tên sản phẩm bắt buộc phải điền" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Giá sản phẩm"
                        name="price"
                        rules={[{ required: true, message: "Giá sản phẩm bắt buộc phải điền" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType> label="Mô tả" name="description">
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ProductAddPage;
