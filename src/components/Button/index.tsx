import React from "react";

type Props = {
    primary?: boolean;
    danger?: boolean;
    children: React.ReactNode;
};

const Button = ({ primary, children, danger }: Props) => {
    return <button className={primary ? "bg-green-500" : "bg-red-500"}>{children}</button>;
};

export default Button;
