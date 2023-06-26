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
            Hello
            <h1>Hello {name}</h1>
            <h2>Age: {age}</h2>
            <ul>
                {info.children.map((child) => (
                    <li key={child.id}>{child.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Hello;
