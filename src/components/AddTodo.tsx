import { ITodo } from "@/interfaces/todo";
import React, { useState } from "react";

type AddTodoProps = {
    addTodo: (todo: ITodo) => void;
};

const AddTodo = (props: AddTodoProps) => {
    const [value, setValue] = useState<ITodo>({ id: 0, name: "", price: 0 });
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const name = target.name;
        setValue({
            id: Math.random(),
            ...value,
            [name]: target.value,
        });
    };
    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.addTodo(value);
    };
    return (
        <>
            <div>{JSON.stringify(value)}</div>
            <form onSubmit={onHandleSubmit}>
                <input type="text" name="name" onChange={onHandleChange} />
                <input type="number" name="price" onChange={onHandleChange} />
                <button>Thêm mới</button>
            </form>
        </>
    );
};

export default AddTodo;
