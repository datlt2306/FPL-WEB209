import React from "react";

type ButtonProps = {
    type?: "primary" | "danger";
    loading?: boolean;
    shape?: "round" | "circle" | "default";
    onClick?: () => void;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
};

const Button = ({ icon, type, loading, shape, children, className, onClick }: ButtonProps) => {
    return (
        <button
            className={`border border-gray-500 py-2 px-4 ${className}
            ${type === "primary" && "text-white bg-blue-500"}
            ${type === "danger" && "text-white bg-red-500"}
            ${shape === "round" && "rounded-full"}
            ${shape === "circle" && "rounded-full w-10 h-10"}
            ${shape === "default" && "rounded-md"}
    `}
            onClick={onClick}
        >
            {icon && icon}
            {children}
        </button>
    );
};

export default Button;
