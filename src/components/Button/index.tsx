import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    primary?: boolean;
    danger?: boolean;
};

const Button = ({ children, primary, danger }: ButtonProps) => {
    return (
        <button
            className={`border p-2 rounded border-gray-500
                ${primary ? "text-white bg-blue-500 hover:bg-blue-800" : ""}
                ${danger ? "text-white bg-red-500 hover:bg-red-800" : ""}
            `}
        >
            {children}
        </button>
    );
};

export default Button;
