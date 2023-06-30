import React from "react";

type ButtonProps = {
    children?: React.ReactNode;
    type?: "primary" | "danger" | "default";
    icon?: React.ReactNode;
    onClick?: () => void;
};

const Button = ({ icon, children, type, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`border p-2 rounded border-gray-500
                ${type === "primary" ? "text-white bg-blue-500 hover:bg-blue-800" : ""}
                ${type === "danger" ? "text-white bg-red-500 hover:bg-red-800" : ""}
            `}
        >
            {icon && icon}
            {children}
        </button>
    );
};

export default Button;
