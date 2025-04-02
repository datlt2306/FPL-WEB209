import React from "react";

const LayoutStore = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <header>header</header>
            <main>{children}</main>
            <footer>Footer</footer>
        </div>
    );
};

export default LayoutStore;
