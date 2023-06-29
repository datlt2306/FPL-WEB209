type InputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ onChange }: InputProps) => {
    return (
        <input
            onChange={onChange}
            placeholder="Car Name"
            className="border border-red-400 p-1 w-full mr-2"
        />
    );
};

export default Input;
