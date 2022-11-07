import React from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

type Props = {};

const Todo = (props: Props) => {
    const [todos, setTodos] = React.useState<string[]>([]);
    const onHandleAddTodo = (todo: any) => {
        setTodos([...todos, todo]);
    };
    return (
        <>
            {JSON.stringify(todos)}
            <AddTodo addTodo={onHandleAddTodo} />
            <ListTodo />
        </>
    );
};

export default Todo;
