import React, { useState } from "react";

type TodoProps = {
    addTodo: (todo: string) => void;
};
const AddTodo = (props: TodoProps) => {
    const [value, setValue] = useState<string>("");

    const onHandleChange = (e: any) => {
        setValue(e.target.value);
    };
    const onHandleSubmit = (e: any) => {
        e.preventDefault();
        props.addTodo(value);
    };
    return (
        <>
            {value}
            <form onSubmit={onHandleSubmit}>
                <input type="text" onChange={onHandleChange} />
                <button>Add Todo</button>
            </form>
        </>
    );
};

export default AddTodo;
