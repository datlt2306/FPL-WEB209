import { ITodo } from "@/interfaces/todo";
import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

type Props = {};

const Todo = (props: Props) => {
    const [todos, setTodos] = useState<ITodo[]>([
        { id: 1, name: "Todo 1", price: 200 },
        { id: 2, name: "Todo 2", price: 300 },
    ]);
    const onHandleAddTodo = (todo: ITodo) => {
        // Thêm 1 phần tử vào mảng thông qua cú pháp spread operator
        setTodos([...todos, todo]);
    };
    return (
        <>
            {/* Nhận dữ liệu từ component thông qua props addTodo */}
            <AddTodo addTodo={onHandleAddTodo} />
            {/* Truyền dữ liệu xuống component thông qua props todos */}
            <ListTodo todos={todos} />
        </>
    );
};

export default Todo;
