import React from "react";

type ButtonProps = {
    type?: "primary" | "danger" | "default";
    icon?: React.ReactNode;
    shape?: "circle" | "round" | "default";
    onClick?: () => void;
    children?: React.ReactNode;
};

const Button = ({ icon, type, children, shape, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`border border-gray-300 p-1 
        ${type === "primary" && "bg-blue-500 text-white"}
        ${type === "danger" && "bg-red-500 text-white"}
        ${shape === "round" && "rounded-full"}
        ${shape === "circle" && "rounded-full w-10 h-10"}
        ${shape === "default" && "rounded"}
    `}
        >
            {icon && icon}
            {children}
        </button>
    );
};

export default Button;
