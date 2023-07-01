type InputProps = {
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ onChange, placeholder }: InputProps) => {
    return (
        <input
            onChange={onChange}
            placeholder={placeholder}
            className="border border-red-400 p-1 w-full mr-2"
        />
    );
};

export default Input;
