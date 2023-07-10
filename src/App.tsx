import { useEffect, useState } from "react";
import "./App.css";
import { Form, List } from "./components";
import { ICar } from "./interfaces/car";
import { instance } from "./axios/config";
import "react-loading-skeleton/dist/skeleton.css";
import { pause } from "./utils/pause";

const config = [
    {
        label: "Name",
        key: "name",
    },
    {
        label: "Price",
        key: "price",
    },
];

function App() {
    const [cars, setCars] = useState<ICar[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            try {
                await pause(1000);
                setCars(await instance.get("/cars"));
                setIsLoading(false);
            } catch (err: any) {
                setIsLoading(false);
                setError(err.message);
            }
        })();
    }, []);
    const addCar = (car: ICar) => {
        setCars([...cars, car]);
    };
    const removeCar = (id: number) => {
        setCars(cars.filter((car) => car.id !== id));
    };

    return (
        <>
            <div className="w-96 border border-red-500 mx-auto my-5">
                <Form onAdd={addCar} />
                <List cars={cars} onRemove={removeCar} loading={isLoading} />
                {/* <Table dataSource={carsData} config={config} /> */}
            </div>
        </>
    );
}

export default App;
