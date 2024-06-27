import React, { useEffect, useState } from "react";
import { ITodo } from "./interfaces/ITodo";

const App = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [editTodoId, setEditTodoId] = useState<number | null>(null);
    useEffect(function () {
        // IFFE function
        (async () => {
            try {
                const response = await fetch(`http://localhost:3000/todos`);
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    const onHandRemove = async (id: number) => {
        try {
            const confirm = window.confirm(`Are you sure????`);
            if (confirm) {
                await fetch(`http://localhost:3000/todos/${id}`, { method: "DELETE" });
                // rerender
                setTodos(todos.filter((todo) => todo.id !== id));
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <h2>Thêm Công việc</h2>
            <form>
                <input type="text" />
                <button>Thêm</button>
            </form>
            <hr />
            <h2>Danh sách công việc</h2>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <li key={index}>
                            {editTodoId === todo.id ? (
                                <form>
                                    <input type="text" defaultValue={todo.title} />
                                    <button>Save</button>
                                    <button onClick={() => setEditTodoId(null)}>Cancel</button>
                                </form>
                            ) : (
                                <>
                                    <span onClick={() => setEditTodoId(todo.id!)}>
                                        {todo.title}
                                    </span>
                                    <button onClick={() => onHandRemove(todo.id!)}>Xóa</button>
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default App;
