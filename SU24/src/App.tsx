/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
    const [products, setProducts] = useState([] as any[]);
    const [error, setError] = useState<string | null>(null);
    const [editProductId, setEditProductId] = useState<number | null>(null);
    useEffect(() => {
        (async () => {
            try {
                const data = await (await fetch(`http://localhost:3000/products`)).json();
                setProducts(data);
            } catch (error: any) {
                setError(error.message);
            }
        })();
    }, []);

    const onHandleRemove = async (id: number) => {
        const confirm = window.confirm("Are you sure?");
        if (confirm) {
            await fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" });
            // rerender
            setProducts(products.filter((item) => item.id !== id));
        }
    };
    return (
        <div className="App">
            {error && <div>{error}</div>}

            <h2>Thêm</h2>
            <form>
                <input type="text" />
                <button>Thêm</button>
            </form>
            <hr />
            {products.map((item, index) => (
                <div key={index}>
                    {editProductId === item.id ? (
                        <form>
                            <input type="text" defaultValue={item.name} />
                            <button>Save</button>
                            <button onClick={() => setEditProductId(null)}>Cancel</button>
                        </form>
                    ) : (
                        <>
                            <span onClick={() => setEditProductId(item.id)}>{item.name}</span>
                            <button onClick={() => onHandleRemove(item.id)}>Xóa</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default App;
