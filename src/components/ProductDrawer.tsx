import { Drawer } from "antd";
import React from "react";

type ProductDrawerProps = {
    onClose: () => void;
    open: boolean;
};

const ProductDrawer = ({ onClose, open }: ProductDrawerProps) => {
    return (
        <Drawer width={378} title="Basic Drawer" onClose={onClose} open={open}>
            <form action="">123</form>
        </Drawer>
    );
};

export default ProductDrawer;
