import React from "react";

type ButtonProps = {
    children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
    return <button className={`border border-gray-300 p-1 rounded`}>{children}</button>;
};

export default Button;
