import { Button, Form, Input, InputNumber, message, Radio, Select } from "antd";
import useCreate from "../../hooks/useCreate";
import { Link, useNavigate, useParams } from "react-router-dom";
import useUpdate from "../../hooks/useUpdate";
import useOne from "../../hooks/useOne";

export function ProductEdit() {
    const [messageApi, contextHolder] = message.useMessage();
    const { id } = useParams();

    const navigate = useNavigate();
    const { data, isLoading } = useOne({ resource: "products", id: Number(id) });
    console.log(data?.data);

    const { mutate } = useUpdate({ resource: "products", id: Number(id) });
    const onFinish = (formData: any) =>
        mutate(formData, {
            onSuccess: () => {
                messageApi.success("Cập nhật phẩm thành công");
                setTimeout(() => {
                    navigate("/admin/products");
                }, 1000);
            },
            onError: (error: any) => {
                messageApi.error(error?.response?.data);
            },
        });

    if (isLoading) return <p>Loading...</p>;
    return (
        <div>
            <div className="flex justify-between items-center py-5">
                <h1 className="font-semibold text-xl">Cập nhật sản phẩm</h1>
                <Button type="primary">
                    <Link to="/admin/products">Quay lại</Link>
                </Button>
            </div>
            <Form
                layout="vertical"
                style={{ width: "50%", margin: "auto" }}
                initialValues={data?.data}
                onFinish={onFinish}
            >
                <Form.Item
                    label={"Tên sản phẩm"}
                    name="name"
                    rules={[{ required: true, message: "Tên sản phẩm không được để trống" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Giá sản phẩm"}
                    name="price"
                    rules={[
                        { required: true, message: "Giá sản phẩm không được để trống" },
                        { type: "number", min: 0, message: "Giá sản phẩm không được để âm" },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Danh mục sản phẩm" name="category">
                    <Select>
                        <Select.Option value="1">Danh mục 1</Select.Option>
                        <Select.Option value="2">Danh mục 2</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Mô tả sản phẩm" name="description">
                    <Input.TextArea rows={5} />
                </Form.Item>
                <Form.Item label="Tình trạng" name="status">
                    <Radio.Group>
                        <Radio value={true}> Còn hàng </Radio>
                        <Radio value={false}> Hết hàng </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
            {contextHolder}
        </div>
    );
}
export default ProductEdit;

// DataProvider
// hooks
// view
// App.tsx để thêm router
