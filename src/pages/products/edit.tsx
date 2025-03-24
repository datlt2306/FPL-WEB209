import { Button, Form, Input, InputNumber, message, Radio, Select } from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import useOne from "../../hooks/useOne";
import useUpdate from "../../hooks/useUpdate";
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};
export const ProductEdit = () => {
    const { id } = useParams();
    const { data, isLoading } = useOne({ resource: "products", id: Number(id) });
    const [messageApi, contextHolder] = message.useMessage();
    const { mutate } = useUpdate({ resource: "products", id: Number(id) });

    const navigate = useNavigate();

    const onFinish = (formData: any) => {
        mutate(formData, {
            onSuccess: () => {
                messageApi.success("Cập nhật sản phẩm thành công");
                setTimeout(() => {
                    navigate("/admin/products");
                }, 1000);
            },
            onError: (error: any) => console.log(error?.response?.data),
        });
    };
    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-semibold">Cập nhật Sản phẩm</h1>
                <Link to="/admin/products">
                    <Button type="primary">Quay lại</Button>
                </Link>
            </div>
            <Form onFinish={onFinish} {...formItemLayout} initialValues={data?.data}>
                <Form.Item
                    label="Tên sản phẩm"
                    name="name"
                    rules={[
                        { required: true, message: "Tên sản phẩm không được để trống" },
                        { min: 5, message: "Tên sản phẩm phải lớn hơn 5 ký tự" },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Giá sản phẩm"
                    name="price"
                    rules={[
                        { required: true, message: "Giá sản phẩm không được để trống" },
                        { type: "number", min: 0, message: "Giá sản phẩm không được để số âm!" },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Danh mục" name="category">
                    <Select>
                        <Select.Option value="1">Danh mục 1</Select.Option>
                        <Select.Option value="2">Danh mục 2</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Mô tả" name="description">
                    <Input.TextArea rows={5} />
                </Form.Item>
                <Form.Item label="Trạng Thái" name="status">
                    <Radio.Group>
                        <Radio value={true}> Còn hàng</Radio>
                        <Radio value={false}>Hết hàng </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
            {contextHolder}
        </>
    );
};
export default ProductEdit;
