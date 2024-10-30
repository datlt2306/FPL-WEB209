import React from "react";
import Header from "../components/Header";

const LayoutWebsite = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="border-2 border-red-500 m-5">
            <Header />
            <div className="border-2 border-blue-500 m-5">{children}</div>
        </div>
    );
};

export default LayoutWebsite;
