import React, { useState } from "react";

const App = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: "Học React", completed: false }, // todo
        { id: 2, title: "Đọc sách", completed: false }, // todo
        { id: 3, title: "Chơi game", completed: false }, //todo
    ]);
    return (
        <div>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <li key={index}>
                            {todo.title}{" "}
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
