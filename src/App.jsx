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
        setTodos([...todos, { id: Date().now, text: inputValue, done: false }]);
    };
    return (
        <>
            <div>
                <form onSubmit={onHandleSubmit}>
                    <input type="text" onChange={(e) => setInputValue(e.target.value)} />
                    <button>Thêm</button>
                </form>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <span>{todo.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default App;
