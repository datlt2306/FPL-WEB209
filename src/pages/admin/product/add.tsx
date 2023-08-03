import { useAddProductMutation } from "@/api/product";
import { IProduct } from "@/interfaces/product";
import { Form, Button, Input } from "antd";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
type FieldType = {
    name: string;
    price: number;
};
const AdminProductAdd = () => {
    const [addProduct, { isLoading }] = useAddProductMutation();
    const navigate = useNavigate();
    const onFinish = (values: IProduct) => {
        addProduct(values)
            .unwrap()
            .then(() => navigate("/admin/product"));
    };
    return (
        <div>
            <header className="mb-4">
                <h2 className="font-bold text-2xl">Thêm sản phẩm</h2>
            </header>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Tên sản phẩm"
                    name="name"
                    rules={[
                        { required: true, message: "Vui lòng nhập tên sản phẩm!" },
                        { min: 3, message: "Sản phẩm ít nhất 3 ký tự" },
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
                            "Thêm"
                        )}
                    </Button>
                    <Button
                        type="primary"
                        danger
                        className="ml-2"
                        onClick={() => navigate("/admin/product")}
                    >
                        Quay lại
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AdminProductAdd;
