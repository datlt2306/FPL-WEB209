type ButtonProps = {
    type?: "primary" | "danger" | "default";
    onClick?: () => void;
    icon?: React.ReactNode;
    children?: React.ReactNode;
};

const Button = ({ onClick, type, children, icon }: ButtonProps) => {
    return (
        <button
            className={`
        border border-gray-300
        py-2
        px-4
        ${type === "primary" && "text-white bg-blue-500"}
        ${type === "danger" && "text-white bg-red-500"}
    `}
            onClick={onClick}
        >
            {icon && icon}
            {children}
        </button>
    );
};

export default Button;
