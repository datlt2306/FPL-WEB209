type Props = {
    background: string;
    color: string;
    text: string;
    onHandleClick?: () => void;
};

const Button = ({ color, background, text, onHandleClick }: Props) => {
    return (
        <div style={{ color, background }} onClick={onHandleClick}>
            {text}
        </div>
    );
};

export default Button;
