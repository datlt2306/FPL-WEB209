import { useState } from "react";
import "./App.css";
import { ICar } from "./interfaces/car";
import { Button, List } from "./components";
import Form from "./components/Form";

function App() {
    const [cars, setCars] = useState<ICar[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<null>(null);

    const addCar = (car: ICar) => {};
    const removeCar = (id: number | string) => {};
    const listCar = () => {};
    return (
        <>
            <div className="w-96 mx-auto border border-gray-500 p-2">
                <Form />
                <List />
            </div>
        </>
    );
}

export default App;
