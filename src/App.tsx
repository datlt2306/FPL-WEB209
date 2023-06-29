import { useState } from "react";
import "./App.css";
import { Form, List } from "./components";
import { ICar } from "./interfaces/car";

const carData = [
    { id: 1, name: "BMW" }, // car
    { id: 2, name: "FORD" },
    { id: 3, name: "MERCEDES" },
];

function App() {
    const [cars, setCars] = useState<ICar[]>(carData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const addCar = (car: ICar) => {
        setCars([...cars, car]);
    };
    const removeCar = (id: any) => {};
    const updateCar = (car: any) => {};
    const listCar = () => {};
    return (
        <>
            <div className="w-96 border border-gray-500 px-2 mx-auto">
                <Form onAdd={addCar} />
                <List data={cars} />
            </div>
        </>
    );
}

export default App;
