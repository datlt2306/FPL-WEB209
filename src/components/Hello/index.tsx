import { IUser } from "@/interfaces/User";

type HelloProps = {
    name: string;
    age: number;
    info: {
        name: string;
        children: IUser[];
    };
};

const Hello = ({ name, age, info }: HelloProps) => {
    return (
        <div>
            <h1>Hello {name}</h1>
            <h2>Age: {age}</h2>
            <ul>
                {info?.children.map((child) => (
                    <li key={child.id}>{child.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Hello;
