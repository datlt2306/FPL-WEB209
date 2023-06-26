import React from "react";

type Props = {
    children: React.ReactNode;
};

const Button = ({ children }: Props) => {
    return <button>{children}</button>;
};

export default Button;
