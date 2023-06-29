import { useState } from "react";
import { Button, Input } from "..";
import { AiOutlinePlus } from "react-icons/ai";
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
        e.target.reset();
    };
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value);
    };
    return (
        <form
            onSubmit={onHandleSubmit}
            className="flex justify-between items-center p-2 border border-red-300"
        >
            <Input onChange={onHandleChange} />
            <Button type="primary" shape="default" icon={<AiOutlinePlus className="text-2xl" />} />
        </form>
    );
};

export default Form;
