import { useState } from "react";
import { Button, Input } from "..";
import { BsPlus } from "react-icons/bs";
import { ICar } from "@/interfaces/car";

type FormProps = {
    onAdd: (car: ICar) => void;
};

const Form = ({ onAdd }: FormProps) => {
    const [inputValue, setInputValue] = useState<string>("");

    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputValue) return;
        onAdd({
            id: Math.floor(Math.random() * 1000) + 1,
            name: inputValue,
        });
        // Reset State ve trang thai ban dau
        setInputValue("");
        // Reset form
        // e.target.reset();
    };
    const onHanleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    return (
        <form onSubmit={onHandleSubmit} className="flex justify-between items-center py-2">
            <Input placeholder="Car Name" onChange={onHanleChange} />
            <Button shape="round" type="primary" icon={<BsPlus className="text-2xl" />} />
        </form>
    );
};

export default Form;
