import React from "react";

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
    console.log(params);
    return <div>ProductDetailPage {params.id}</div>;
};

export default ProductDetailPage;
