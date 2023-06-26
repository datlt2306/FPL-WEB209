import { useState } from "react";
import "./App.css";
import { ICar } from "./interfaces/Car";

function App() {
    const [cars, setCars] = useState<ICar[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<null>(null);
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
    );
}

export default App;
// npm i -g pnpm
// pnpm create vite@latest -- --template react-ts
// cd vite-react-ts
// pnpm i
// Chỉnh sửa file tsconfig.json
// cài đặt thêm module vite paths: vite-tsconfig-paths
// chỉnh sửa file vite.config.ts
