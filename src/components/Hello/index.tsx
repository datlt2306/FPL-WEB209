import styles from "./Hello.module.css";

type Props = {};

const Hello = (props: Props) => {
    return (
        <div>
            <h1 className={styles.title}>Hello Components</h1>
        </div>
    );
};

export default Hello;
