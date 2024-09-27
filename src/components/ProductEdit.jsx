import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import {
    Form,
    Input,
    Button,
    InputNumber,
    Radio,
    Select,
    Switch,
    Upload,
    message,
    Skeleton,
} from "antd";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const { TextArea } = Input;
const ProductEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [imageUrl, setImageUrl] = useState("");
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            return await axios.get(`http://localhost:3000/products/${id}`);
        },
    });
    const { mutate } = useMutation({
        mutationFn: async (product) => {
            return await axios.put(`http://localhost:3000/products/${id}`, product);
        },
        onSuccess: () => {
            messageApi.success("Cập nhật sản phẩm thành công");
            // reset form

            // chuyeern huong ve trang danh sach san pham
            navigate("/admin/products");
            // refeching data
            queryClient.invalidateQueries({
                queryKey: ["product", id],
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
            <Skeleton loading={isLoading}>
                <Form
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
                    initialValues={{ ...data?.data }}
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
            </Skeleton>
        </div>
    );
};

export default ProductEdit;
/**
 * B1: Lấy ID trên url sử dụng useParams
 * B2: sử dụng useQuery để lấy dữ liệu sản phẩm - truyền id lên
 * B3: fill nội dung sản phẩm vào form
 * B4: lấy giá trị form và gửi lên server
 * B5: Thông báo cập nhật thành công
 */
