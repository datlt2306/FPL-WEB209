import React from "react";

type AuthenticatedProps = {
    children: React.ReactNode;
    fallback: React.ReactNode;
};
const Authenticated = ({ children, fallback }: AuthenticatedProps) => {
    const isAuthenticated = true;
    return <div>{isAuthenticated ? children : fallback}</div>;
};

export default Authenticated;
