import React from "react";

type AuthenticatedProps = {
    children: React.ReactNode;
    fallback: React.ReactNode;
};

const Authenticated = ({ children, fallback }: AuthenticatedProps) => {
    const isAuthenticated = true;
    return <>{isAuthenticated ? children : fallback}</>;
};

export default Authenticated;
