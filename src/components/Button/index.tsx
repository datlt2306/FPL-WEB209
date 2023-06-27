import React from "react";

type ButtonProps = {
    primary?: boolean;
    danger?: boolean;
    text: string;
    loading?: boolean;
};

const Button = ({ primary, danger, text, loading }: ButtonProps) => {
    return (
        <div>
            {loading ? "Loading..." : ""}
            {primary ? <button className="text-green-500 bg-black">{text}</button> : ""}
            {danger ? <button className="text-red-500 bg-green-500">{text}</button> : ""}
        </div>
    );
};

export default Button;
