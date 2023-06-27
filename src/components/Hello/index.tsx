import styles from "./Hello.module.css";

type HelloProps = {
    name: string;
    age: number;
    info: {
        name: string;
        children: { id: number; name: string }[];
    };
};

const Hello = (props: HelloProps) => {
    return (
        <div>
            <h2 className={styles["main-title"]}>Hello component</h2>
        </div>
    );
};

export default Hello;
