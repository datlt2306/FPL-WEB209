import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hook";

type PrivateLayoutProps = {
    children: React.ReactElement;
};

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
    // get gia tri tu localStorage
    // hoac get State isLogin | userInfo tu redux store
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    if (!isAuth) return <Navigate to="/login" />;

    return children;
};

export default PrivateLayout;
