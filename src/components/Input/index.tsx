import React from "react";

type InputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ onChange }: InputProps) => {
    return <input onChange={onChange} className="border border-red-500 w-full p-2 mr-2" />;
};

export default Input;
