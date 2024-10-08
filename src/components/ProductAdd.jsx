import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber, message, Radio, Select, Switch, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const ProductAdd = () => {
    const [imageUrls, setImageUrls] = useState("");
    const [form] = Form.useForm();
    const queryClient = useQueryClient();
    const [messageApi, contextHolder] = message.useMessage();
    const { mutate, isPending } = useMutation({
        mutationFn: async (product) => {
            return await axios.post(`http://localhost:3000/products`, product);
        },
        onSuccess: () => {
            // reset form
            form.resetFields();
            messageApi.open({
                type: "success",
                content: "Thêm sản phẩm thành công!",
            });
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
    const onHandleChange = (info) => {
        console.log("info", info);
        if (info.file.status === "done") {
            setImageUrls((prev) => [...prev, info.file.response.secure_url]);
        }
    };
    const onFinish = (values) => {
        if (!imageUrls) return;
        console.log(1);
        mutate({ ...values, imageUrls });
    };
    return (
        <div>
            {contextHolder}
            <Form
                name="basic"
                form={form}
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
                disabled={isPending}
            >
                <Form.Item
                    label="Tên sản phẩm"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Bắt buộc nhập",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Giá sản phẩm"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: "Bắt buộc nhập",
                        },
                        {
                            type: "number",
                            min: 0,
                            message: "Không được để số âm",
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload
                        multiple={true}
                        action={`https://api.cloudinary.com/v1_1/${
                            import.meta.env.VITE_CLOUD_NAME
                        }/image/upload`}
                        listType="picture-card"
                        data={{
                            upload_preset: import.meta.env.VITE_CLOUD_PRESETS,
                        }}
                        onChange={onHandleChange}
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
                <Form.Item label="Tình trạng" name="available" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item label="Loại hàng" name="type">
                    <Radio.Group>
                        <Radio value="type1">Hàng cũ</Radio>
                        <Radio value="type2">Hàng mới</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Danh mục" name="category">
                    <Select>
                        <Select.Option value="idCategory1">Danh mục 1</Select.Option>
                        <Select.Option value="idCategory2">Danh mục 2</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Mô tả sản phẩm" name="description">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Thêm
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ProductAdd;

/**
 * B1: Hiển thị giao diện
 * B2: Lấy giá trị form
 * B3: Reset form sau khi submit thành công
 * B4: Hiển thị message sau khi submit thành công
 */

/**
 *  Upload ảnh
 * Bước 1: Đăng ký tài khoản cloudinary
 * Bước 2: Tạo cloud name
 * Bước 3: Tạo upload presets đặt status "unsigned"
 * Bước 4: có API cloudinary
 * Bước 5: Sử dụng component Upload của antd
 * Bước 6: Upload ảnh thành công xong thì lưu đường link vào state
 * Bước 7: Submit form bao gồm thông tin form + ảnh
 */
