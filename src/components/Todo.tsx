import { ITodo } from "@/interfaces/todo";
import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

type Props = {};

const Todo = (props: Props) => {
    const [todos, setTodos] = useState<ITodo[]>([
        { id: 1, name: "Todo 1" },
        { id: 2, name: "Todo 2" },
    ]);
    const onHandleAddTodo = (todo: ITodo) => {
        setTodos([...todos, todo]);
    };
    return (
        <>
            <AddTodo addTodo={onHandleAddTodo} />
            <ListTodo todos={todos} />
        </>
    );
};

export default Todo;
