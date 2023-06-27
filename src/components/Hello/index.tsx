import { IInfo } from "@/interfaces/info";
import styles from "./Hello.module.css";

type HelloProps = {
    name: string;
    age: number;
    info: IInfo;
};

const Hello = ({ name, age, info }: HelloProps) => {
    return (
        <div>
            <h1 className={styles.title}>Hello {name}</h1>
            <p className="font-bold">{age}</p>
            <ul>
                {info.children.map((child) => (
                    <li key={child.id}>
                        {child.name} - {child.age}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Hello;
