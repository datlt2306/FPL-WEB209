import { useState } from "react";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const onHandleSubmit = (e) => {
        // chặn sự kiện reload của form
        e.preventDefault();
        if (!inputValue) return;
        // spread operator
        setTodos([...todos, { id: Date.now(), text: inputValue, done: false }]);
        setInputValue("");
    };
    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
    };
    const onHandleRemove = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
    };
    return (
        <>
            {JSON.stringify(todos)}
            <form onSubmit={onHandleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onInput={(e) => setInputValue(e.target.value)}
                />
                <button>Thêm</button>
            </form>
            <ul>
                {todos &&
                    todos.length > 0 &&
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <input type="checkbox" onChange={() => toggleTodo(todo.id)} />
                            <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                                {todo.text}
                            </span>
                            <button onClick={() => onHandleRemove(todo.id)}>Xóa</button>
                        </li>
                    ))}
            </ul>
        </>
    );
};

export default App;
