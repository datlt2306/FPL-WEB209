import { BackwardFilled } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const ProductAddPage = (props: Props) => {
    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-2xl font-semibold">Thêm sản phẩm</h1>
                <Button type="primary">
                    <Link to={`/admin/products`}>
                        <BackwardFilled /> Quay lại
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default ProductAddPage;

// Tạo table hiển thị danh sách sản phẩm : 10 trường => 10 cột
// Tạo table hiển thị danh sách user : 3 trường => 3 cột
