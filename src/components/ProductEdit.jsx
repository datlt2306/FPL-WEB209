import { PlusOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    Button,
    Form,
    Input,
    InputNumber,
    message,
    Radio,
    Select,
    Skeleton,
    Switch,
    Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {
    // Hooks
    const { id } = useParams();
    const navigate = useNavigate();
    const [imageUrls, setImageUrls] = useState("");
    const [form] = Form.useForm();
    const queryClient = useQueryClient();
    const [defaultFileList, setDefaultFileList] = useState([]);

    const [messageApi, contextHolder] = message.useMessage();

    // useQuery
    const { data, isLoading } = useQuery({
        queryKey: ["products", id],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:3000/products/${id}`);
            return response.data;
        },
    });
    useEffect(() => {
        if (data?.imageUrls) {
            setImageUrls(data.imageUrls);
            setDefaultFileList(
                data.imageUrls.map((url, index) => ({
                    uid: index,
                    name: `image-${index}`,
                    status: "done",
                    url: url,
                }))
            );
        }
    }, [data]);
    const { mutate, isPending } = useMutation({
        mutationFn: async (product) => {
            return await axios.put(`http://localhost:3000/products/${id}`, product);
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Cập nhật sản phẩm thành công!",
            });
            setTimeout(() => {
                navigate("/admin/products"); // redirect về trang danh sách sản phẩm
            }, 2000);

            queryClient.invalidateQueries({
                queryKey: ["products", id],
            });
        },
        onError: (error) => {
            messageApi.error({
                type: "error",
                content: `Thêm sản phẩm thất bại, ${error}`,
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
        if (info.file.status === "done") {
            setImageUrls((prev) => [...prev, info.file.response.secure_url]);
        }
    };
    const onFinish = (values) => {
        if (!imageUrls) return;
        mutate({ ...values, imageUrls });
    };
    if (isLoading) return <Skeleton active />;
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
                initialValues={data}
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
                        key={defaultFileList.length}
                        multiple={true}
                        action="https://api.cloudinary.com/v1_1/ecommercer2021/image/upload"
                        listType="picture-card"
                        data={{ upload_preset: "demo-upload" }}
                        onChange={onHandleChange}
                        defaultFileList={defaultFileList}
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

export default ProductEdit;

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

/**
 * Edit sản phẩm:
 * Bước 1: Tạo router link đến page edit sản phẩm
 * Bước 2: Truy cập component list, thêm router link cho button
 * Bước 3: Truy cập component edit, lấy id từ url sử dụng useParams()
 * Bước 4: Dùng id để call API lay data sản phẩm
 * Bước 5: Hiển thị data sản phẩm lên form:
 *  - sử dụng thuộc tính initialValues của Form.
 *  - Lưu ý phải có loading trước khi sử dụng initialValues
 * Bước 6: Submit form, call API update sản phẩm
 * Bước 7: Nếu thành công thì :
 *      1. Thông báo thành công | thất bại
 *      2. redirect về trang sản phẩm
 *      3. refetching data lại danh sách sản phẩm, chi tiết sản phẩm
 */
