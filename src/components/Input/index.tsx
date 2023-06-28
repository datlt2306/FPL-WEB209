import React from "react";

type InputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ onChange }: InputProps) => {
    return <input onChange={onChange} className="border border-gray-500 p-2 w-full mr-2" />;
};

export default Input;
