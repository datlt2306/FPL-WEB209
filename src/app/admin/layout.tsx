import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div>aside</div>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
