import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

function Article() {
    const seo = {
        title: "Article Title",
        description: "Article Description",
    };
    const title = "My First Component";
    const id = 1;
    const data = ["Components: UI Building Blocks", "Defining a Component", "Using a Component"];
    return (
        <article>
            <h1>{`${title} Le Trong Dat `}</h1>
            <ol>
                {data.map((item, index) => (
                    <li key={index}>
                        <a href={`/product/${id}`}>{item}</a>
                    </li>
                ))}
            </ol>
        </article>
    );
}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<Article />);
