import React from "react";

type InputProps = {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    prefix?: React.ReactNode;
};

const Input = ({ placeholder, onChange, prefix }: InputProps) => {
    return (
        <div className="pl-2 flex items-center space-x-2 border border-gray-500 w-full mr-2">
            {prefix && prefix}
            <input
                onChange={onChange}
                className="outline-none p-2 w-full"
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
