import styles from "./Hello.module.css";

type HelloProps = {
    name: string;
    age: number;
    info: {
        name: string;
        children: { id: number; name: string }[];
    };
};

const Hello = ({ name, age, info }: HelloProps) => {
    return (
        <div>
            <h2 className={styles["main-title"]}>Hello {name}</h2>
            <p>Age: {age}</p>
            <ul>
                {info?.children?.map((child) => (
                    <li key={child.id}>{child.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Hello;
