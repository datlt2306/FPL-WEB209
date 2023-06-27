import { useState } from "react";
import "./App.css";

function App() {
    const [cars, setCars] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const addCart = (car: any) => {};
    const removeCar = (id: any) => {};
    const updateCar = (car: any) => {};
    const listCar = () => {};
    return <></>;
}

export default App;
