type InputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    prefix?: React.ReactNode;
    size?: string;
    name?: string;
};

const Input = ({ name, size, prefix, placeholder, onChange }: InputProps) => {
    return (
        <div className="flex items-center space-x-2 border border-green-500  w-full mr-2 pl-2 pr-2">
            {prefix && prefix}
            <input
                className={`w-full py-2 outline-none
                    ${size === "small" && "text-sm"}
                `}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
