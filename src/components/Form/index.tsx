import React, { useState } from "react";
import { Button, Input } from "..";
import { ICar } from "@/interfaces/car";

type FormProps = {
    onAdd: (car: ICar) => void;
};

const Form = ({ onAdd }: FormProps) => {
    const [value, setValue] = useState<string>("");
    const onHandleSubmit = (e: any) => {
        e.preventDefault();
        e.target.reset();
        onAdd({ id: 10, name: value });
    };
    const onHandleChange = (e: any) => {
        setValue(e.target.value);
    };
    return (
        <form onSubmit={onHandleSubmit} className="flex justify-between items-center p-2">
            <Input onChange={onHandleChange} />
            <Button />
        </form>
    );
};

export default Form;
