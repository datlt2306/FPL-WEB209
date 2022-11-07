import React, { useState } from "react";

type TodoProps = {
    addTodo: (todo: string) => void;
};
const AddTodo = (props: TodoProps) => {
    const [value, setValue] = useState({});

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const event = e.target;
        console.log(event.value);
        setValue({ ...value, [event.name]: event.value });
    };
    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // props.addTodo(value);
    };
    return (
        <>
            {JSON.stringify(value)}
            <form onSubmit={onHandleSubmit}>
                <input type="text" name="name" onChange={onHandleChange} />
                <input type="text" name="price" onChange={onHandleChange} />
                <button>Add Todo</button>
            </form>
        </>
    );
};

export default AddTodo;
