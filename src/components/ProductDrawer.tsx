import { Button, Drawer, Form, Input, InputNumber, message, Segmented, Upload } from "antd";
import React from "react";
import useCreate from "../hooks/useCreate";

type ProductDrawerProps = {
    onClose: () => void;
    open: boolean;
};

const ProductDrawer = ({ onClose, open }: ProductDrawerProps) => {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const { mutate } = useCreate({ resource: "products" });
    const onFinish = (formData: any) => {
        mutate(formData, {
            onSuccess: () => {
                messageApi.success("Thêm sản phẩm thành công");
                onClose();
                form.resetFields();
            },
            onError: () => {
                messageApi.error("Thêm sản phẩm thất bại");
            },
        });
    };
    return (
        <>
            <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                <Form layout="vertical" onFinish={onFinish} form={form}>
                    <Form.Item label="Upload" valuePropName="fileList">
                        <Upload action="/upload.do" listType="picture-card">
                            <button
                                style={{
                                    color: "inherit",
                                    cursor: "inherit",
                                    border: 0,
                                    background: "none",
                                }}
                                type="button"
                            >
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </button>
                        </Upload>
                    </Form.Item>
                    <Form.Item label="Tên sản phẩm" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Giá sản phẩm" name="price">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="Mô tả sản phẩm" name="description">
                        <Input.TextArea rows={5} />
                    </Form.Item>
                    <Form.Item label="Trạng thái" name="status">
                        <Segmented<string> options={["Còn hàng", "Hết hàng"]} />
                    </Form.Item>
                    <Form.Item>
                        <div className="flex items-center justify-between">
                            <Button type="primary" danger onClick={onClose}>
                                Hủy
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Lưu
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </Drawer>
            {contextHolder}
        </>
    );
};

export default ProductDrawer;
