import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Form, Input, Button, InputNumber, Radio, Select, Switch } from "antd";
const { TextArea } = Input;
const ProductAdd = () => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: async (product) => {
            return await axios.post(`http://localhost:3000/products`, product);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });
    const onFinish = (values) => {
        mutate(values);
    };
    return (
        <div>
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
                <Form.Item label="Tình trạng" name="avaiable" valuePropName="checked">
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
