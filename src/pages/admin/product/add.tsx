import { useAddProductMutation } from "@/api/product";
import { Button, Checkbox, Form, Input } from "antd";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
type FieldType = {
    name?: string;
    price?: string;
};

const AdminProductAdd = () => {
    const [addProduct, { isLoading }] = useAddProductMutation();
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        addProduct(values)
            .unwrap()
            .then(() => {
                navigate("/admin/product");
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <header className="mb-4">
                <h2 className="font-bold text-2xl">Thêm sản phẩm</h2>
            </header>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Tên sản phẩm"
                    name="name"
                    rules={[
                        { required: true, message: "Vui lòng nhập tên sản phẩm!" },
                        { min: 3, message: "Sản phẩm ít nhất phải 3 ký tự" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType> label="Giá sản phẩm" name="price">
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" danger htmlType="submit">
                        {isLoading ? (
                            <AiOutlineLoading3Quarters className="animate-spin" />
                        ) : (
                            "Thêm sản phẩm"
                        )}
                    </Button>
                    <Button
                        className="ml-2"
                        type="primary"
                        danger
                        htmlType="submit"
                        onClick={() => navigate("/admin/product")}
                    >
                        Quay lại
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AdminProductAdd;
