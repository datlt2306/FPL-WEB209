import { Button, Form, Input, InputNumber, Radio, Select } from "antd";
import useCreate from "../../hooks/useCreate";
import { useNavigate } from "react-router-dom";

export function ProductAdd() {
    const navigate = useNavigate();
    const { mutate } = useCreate({ resource: "products" });
    const onFinish = (formData: any) =>
        mutate(formData, {
            onSuccess: () => {
                alert("Thêm sản phẩm thành công");
                navigate("/admin/products");
            },
        });
    return (
        <div>
            <Form layout="vertical" onFinish={onFinish} style={{ width: "50%", margin: "auto" }}>
                <Form.Item label={"Tên sản phẩm"} name="name">
                    <Input />
                </Form.Item>
                <Form.Item label={"Giá sản phẩm"} name="price">
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
        </div>
    );
}
export default ProductAdd;

// DataProvider
// hooks
// view
// App.tsx để thêm router
