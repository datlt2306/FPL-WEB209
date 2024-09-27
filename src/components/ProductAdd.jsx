import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, InputNumber, Radio, Select, Switch, Upload, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;
const ProductAdd = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const [imageUrl, setImageUrl] = useState("");
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: async (product) => {
            return await axios.post(`http://localhost:3000/products`, product);
        },
        onSuccess: () => {
            messageApi.success("Thêm sản phẩm thành công");
            // reset form
            form.resetFields();
            // chuyeern huong ve trang danh sach san pham
            navigate("/admin/products");
            // refeching data
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    const handleOnChange = (info) => {
        console.log("info", info);
        if (info.file.status === "done") {
            setImageUrl(info.file.response.secure_url);
        }
    };
    const onFinish = (values) => {
        mutate({ ...values, imageUrl });
    };
    return (
        <div>
            {contextHolder}
            <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Tên sản phẩm"
                    name="name"
                    rules={[{ required: true, message: "Bắt buộc nhập tên sản phẩm" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Giá sản phẩm"
                    name="price"
                    rules={[
                        { required: true, message: "Bắt buộc nhập tên sản phẩm" },
                        { type: "number", min: 0, message: "Giá phải nhập > 0" },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Tình trạng" name="available" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item label="Loại hàng" name="type">
                    <Radio.Group>
                        <Radio value="type1"> Hàng cũ </Radio>
                        <Radio value="type2"> Hàng mới </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Danh mục" name="category">
                    <Select>
                        <Select.Option value="danhmuc1">Danh mục 1</Select.Option>
                        <Select.Option value="danhmuc2">Danh mục 2</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Mô tả" name="description">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload
                        action="https://api.cloudinary.com/v1_1/ecommercer2021/image/upload"
                        listType="picture-card"
                        data={{
                            upload_preset: "demo-upload",
                        }}
                        onChange={handleOnChange}
                    >
                        <button
                            style={{
                                border: 0,
                                background: "none",
                            }}
                            type="button"
                        >
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Thêm
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ProductAdd;
