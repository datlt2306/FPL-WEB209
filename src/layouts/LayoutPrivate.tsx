import React from "react";
import { Navigate } from "react-router-dom";

type LayoutPrivateProps = {
    children: React.ReactElement;
};

const LayoutPrivate = ({ children }: LayoutPrivateProps) => {
    const isAdmin = false;
    if (!isAdmin) return <Navigate to="/login" />;
    return children;
};

export default LayoutPrivate;
