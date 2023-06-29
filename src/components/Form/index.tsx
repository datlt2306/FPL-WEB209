import { useState } from "react";
import { Button, Input } from "..";
import { AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import { ICar } from "@/interfaces/car";
type FormProps = {
    onAdd: (car: ICar) => void;
};

const Form = ({ onAdd }: FormProps) => {
    const [valueInput, setValueInput] = useState<string>("");

    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!valueInput) return;
        onAdd({
            id: Math.floor(Math.random() * 1000),
            name: valueInput,
        });

        setValueInput("");
        const form = e.target as HTMLFormElement;
        form.reset();
    };
    const onHanleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value);
    };
    return (
        <form onSubmit={onHandleSubmit} className="flex items-center justify-between">
            {JSON.stringify(valueInput)}
            <Input onChange={onHanleChange} placeholder="Car name" prefix={<AiOutlineUser />} />
            <Button type="primary" icon={<AiOutlinePlus className="text-2xl" />} />
        </form>
    );
};

export default Form;
