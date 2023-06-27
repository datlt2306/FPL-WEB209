type ShowInfoProps = {
    name: string;
    age: number;
    isMarried: boolean;
    skill: { id?: number; name: string }[];
    children: React.ReactNode;
};

const ShowInfo = ({ name, age, isMarried, skill, children }: ShowInfoProps) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>{isMarried ? "Đã chết" : "Còn tươi"}</p>
            Children: {children}
            <ul>
                {skill.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ShowInfo;
