import React, { useEffect, useState } from "react";
import { ITodo } from "./interfaces/ITodo";

const App = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(function () {
        fetch(`http://localhost:3000/todos`)
            .then((response) => response.json())
            .then((data) => setTodos(data));
    }, []);
    return (
        <div>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <li key={index}>
                            {todo.title}
                            <button
                                onClick={() =>
                                    window.confirm("are you sure??") &&
                                    setTodos(todos.filter((item) => item.id !== todo.id))
                                }
                            >
                                Xóa
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default App;
