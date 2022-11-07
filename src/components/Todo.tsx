import React from "react";
import { ITodo } from "../interfaces/todo";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

type Props = {};

const Todo = (props: Props) => {
    const [todos, setTodos] = React.useState<ITodo[]>([]);
    const onHandleAddTodo = (todo: any) => {
        setTodos([...todos, todo]);
    };
    return (
        <>
            {JSON.stringify(todos)}
            <AddTodo addTodo={onHandleAddTodo} />
            <ListTodo todos={todos} />
        </>
    );
};

export default Todo;
