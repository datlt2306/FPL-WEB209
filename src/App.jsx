import { useState } from "react";
import "./App.css";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const onHandleSubmit = (e) => {
        // Chặn lại sự kiện reload
        e.preventDefault();
        if (inputValue.trim() === "") return;
        // spread operator
        setTodos([...todos, { id: Date.now(), text: inputValue, done: false }]);
        setInputValue("");
    };
    const toggleTodo = (id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        );
        setTodos(newTodos);
    };
    const removeTodo = (id) => {
        setTodos(todos.filter((item) => item.id !== id));
    };
    return (
        <>
            <div>
                {JSON.stringify(todos)}
                <form onSubmit={onHandleSubmit}>
                    <input
                        type="text"
                        defaultValue={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button>Thêm</button>
                </form>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <input
                                type="checkbox"
                                checked={todo.done}
                                onChange={() => toggleTodo(todo.id)}
                            />
                            <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                                {todo.text}
                            </span>
                            <button onClick={() => removeTodo(todo.id)}>Xóa</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default App;
