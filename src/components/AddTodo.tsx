import { ITodo } from "@/interfaces/todo";
import React, { useState } from "react";

type AddTodoProps = {
    addTodo: (todo: ITodo) => void;
};

const AddTodo = (props: AddTodoProps) => {
    const [value, setValue] = useState<ITodo>();
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({
            id: 1,
            name: e.target.value,
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
                <input type="text" onChange={onHandleChange} />
                <button>Thêm mới</button>
            </form>
        </>
    );
};

export default AddTodo;
