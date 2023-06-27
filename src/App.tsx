import { useState } from "react";
import "./App.css";
import ShowInfo from "@/components/ShowInfo";

type Skill = {
    id?: number;
    name: string;
};

function App() {
    const [skill] = useState<Skill[]>([
        {
            id: 1,
            name: "ReactJS",
        },
        {
            id: 2,
            name: "Nodejs",
        },
    ]);
    return (
        <>
            <h1 className="text-red-500">App</h1>
            <ShowInfo name="Dat" age={20} isMarried={true} skill={skill}>
                Ahihi
            </ShowInfo>
        </>
    );
}

export default App;
