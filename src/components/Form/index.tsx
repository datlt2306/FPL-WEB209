import { useState } from "react";
import { AiFillBook, AiOutlinePlus } from "react-icons/ai";

import { ICar } from "@/interfaces/car";
import { Button, Input } from "..";

type FormProps = {
    onAdd: (car: ICar) => void;
};

const Form = ({ onAdd }: FormProps) => {
    const [valueInput, setValueInput] = useState<string>("");
    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!valueInput) return;
        onAdd({ id: 10, name: valueInput });

        // Reset form
        const form = e.target as HTMLFormElement;
        form.reset();
        // Reset State
        setValueInput("");
    };
    const onHandleChange = (e: any) => {
        setValueInput(e.target.value);
    };
    return (
        <form onSubmit={onHandleSubmit} className="flex justify-between items-center p-2">
            <Input onChange={onHandleChange} placeholder="Car Name" prefix={<AiFillBook />} />
            <Button type="primary" icon={<AiOutlinePlus />} />
        </form>
    );
    // https://meet.google.com/feu-nswx-wos
};

export default Form;
