import { useAddProductMutation } from "@/api/product";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const ProductAdd = () => {
    const [addProduct, { isLoading }] = useAddProductMutation();
    const navigate = useNavigate();

    const onFinish = (values: any) => {
        addProduct(values)
            .unwrap()
            .then(() => {
                return navigate("/admin/product");
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    type FieldType = {
        name: string;
        price: number;
    };
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-2xl mb-4">Thêm sản phẩm</h2>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Tên sản phẩm"
                    name="name"
                    rules={[
                        { required: true, message: "Vui lòng nhập tên sản phẩm" },
                        { min: 3, message: "Ít nhất 3 ký tự" },
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
                            "Submit"
                        )}
                    </Button>
                    <Button
                        type="primary"
                        danger
                        className="ml-2"
                        onClick={() => navigate("/admin/product")}
                    >
                        Back
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ProductAdd;
