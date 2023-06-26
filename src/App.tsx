import { useState } from "react";
import "./App.css";
import { Hello, Sum } from "./components";
import { IUser } from "./interfaces/User";

function App() {
    const [info] = useState<{ name: string; children: IUser[] }>({
        name: "Dat",
        children: [
            { id: 1, name: "Tung Lam" },
            { id: 2, name: "Thanh Tung" },
        ],
    });
    return (
        <div>
            <Hello name="Dat" age={20} info={info} />
            <Sum />
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
