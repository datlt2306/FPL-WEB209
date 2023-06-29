type InputProps = {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    prefix?: React.ReactNode;
};

const Input = ({ onChange, placeholder, prefix }: InputProps) => {
    return (
        <div className="flex items-center justify-between  border border-green-500  w-full mr-2">
            {prefix && <span className="ml-2">{prefix}</span>}
            <input
                className="
           outline-none
            p-2 
            w-full
            mr-2
            "
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
