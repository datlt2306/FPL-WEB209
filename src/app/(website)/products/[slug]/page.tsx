"use client";
import React, { useState } from "react";

const ProductDetailPage = () => {
    const [product, setProduct] = useState("san pham A");
    console.log(product);
    return <div>ProductDetailPage</div>;
};

export default ProductDetailPage;
