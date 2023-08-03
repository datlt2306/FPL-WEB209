import {
    useAddProductMutation,
    useGetProductByIdQuery,
    useUpdateProductMutation,
} from "@/api/product";
import { pause } from "@/utils/pause";
import { Button, Form, Input, Skeleton } from "antd";
import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
type FieldType = {
    name?: string;
    price?: string;
};

const AdminProductEdit = () => {
    const { idProduct } = useParams<{ idProduct: string }>();
    const [updateProduct, { isLoading: isUpdateLoading }] = useUpdateProductMutation();
    const {
        data: productData,
        error,
        isLoading: isGetProductLoading,
    } = useGetProductByIdQuery(idProduct || "");
    const navigate = useNavigate();
    const [form] = Form.useForm();

    useEffect(() => {
        // đồng bộ dữ liệu từ API fill vào form
        form.setFieldsValue({
            name: productData?.name,
            price: productData?.price,
        });
    }, [productData]);
    const onFinish = (values: any) => {
        updateProduct({ ...values, id: idProduct })
            .unwrap()
            .then(async () => {
                console.log("Update success");
                await pause(3000);
                navigate("/admin/product");
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };
    if (isGetProductLoading) return <Skeleton />;
    return (
        <>
            <header className="mb-4">
                <h2 className="font-bold text-2xl">Sửa sản phẩm</h2>
            </header>
            <Form
                form={form}
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
                        {isUpdateLoading ? (
                            <AiOutlineLoading3Quarters className="animate-spin" />
                        ) : (
                            "Cập nhật sản phẩm"
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

export default AdminProductEdit;
