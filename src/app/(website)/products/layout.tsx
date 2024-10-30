import React from "react";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="border-2 border-yellow-500 m-5">
            ProductLayout
            {children}
        </div>
    );
};

export default ProductLayout;
