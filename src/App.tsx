import { useState } from "react";
import "./App.css";
import { Form, List } from "./components";
import { ICar } from "./interfaces/car";

function App() {
    //State
    const [cars, setCars] = useState<ICar[]>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [error, setError] = useState<string>("");

    // Action
    const addCar = (car: ICar) => {};
    const removeCar = (id: number) => {};
    const listCar = () => {};
    return (
        <>
            <Form />
            <List />
        </>
    );
}

export default App;
