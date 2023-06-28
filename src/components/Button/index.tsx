import React from "react";

type Props = {
    primary?: boolean;
    danger?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
};

const Button = ({ primary, children, danger, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`p-2 border border-gray-400 rounded
        ${primary && "bg-blue-500 text-white"}
        ${danger && "bg-red-500 text-white"}
    `}
        >
            {children}
        </button>
    );
};

export default Button;
