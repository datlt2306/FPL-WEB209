import { useState } from "react";
import "./App.css";
import { ICar } from "./interfaces/Car";
import { Button, Input, List } from "./components";

function App() {
    const [cars, setCars] = useState<ICar[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<null>(null);

    const addCar = (car: ICar) => {};
    const removeCar = (id: number) => {};
    const updateCar = (car: ICar) => {};
    const fetchCars = () => {};
    return (
        <div>
            <div className="w-96 mx-auto border">
                <form className="border-b mb-3 p-3 flex justify-between items-center">
                    <Input />
                    <Button>Add</Button>
                </form>
                <List />
            </div>
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
