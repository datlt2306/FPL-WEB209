import { Button, Drawer, Form, Input, InputNumber, message, Segmented, Upload } from "antd";
import useCreate from "../hooks/useCreate";

type ProductDrawerProps = {
    onClose: () => void;
    open: boolean;
};

const ProductDrawer = ({ onClose, open }: ProductDrawerProps) => {
    // Sử dụng useMessage để hiển thị thông báo
    const [messageApi, contextHolder] = message.useMessage();
    // call API để tạo mới sản phẩm
    const { mutate, isPending } = useCreate({ resource: "products" });
    const onFinish = (formData: any) => {
        // Gọi API để tạo mới sản phẩm
        mutate(formData, {
            // Sau khi tạo mới sản phẩm thành công thì làm mới API
            onSuccess: () => {
                messageApi.success("Thêm sản phẩm thành công");
                onClose();
            },
        });
    };

    return (
        <>
            <Drawer width={378} title="Basic Drawer" onClose={onClose} open={open}>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Ảnh" valuePropName="fileList">
                        <Upload action="/upload.do" listType="picture-card">
                            <button
                                style={{
                                    color: "inherit",
                                    cursor: "inherit",
                                    border: 0,
                                    background: "none",
                                    width: "100%",
                                }}
                                type="button"
                            >
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </button>
                        </Upload>
                    </Form.Item>
                    <Form.Item label="Tên sản phẩm" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Giá sản phẩm" name="price">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="Mô tả" name="description">
                        <Input.TextArea rows={5} />
                    </Form.Item>
                    <Form.Item label="Trạng Thái" name="status">
                        <Segmented<string> options={["Còn hàng", "Hết hàng"]} />
                    </Form.Item>
                    <Form.Item>
                        <div className="flex justify-between items-center">
                            <Button type="primary" danger disabled={isPending}>
                                Hủy
                            </Button>
                            <Button type="primary" htmlType="submit">
                                {isPending ? "Đang tải..." : "Lưu"}
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </Drawer>
            {contextHolder}
        </>
    );
};

export default ProductDrawer;
