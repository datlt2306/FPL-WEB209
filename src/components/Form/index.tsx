import { Button, Input } from "..";
import { AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
type FormProps = {};

const Form = (props: FormProps) => {
    return (
        <form className="flex items-center justify-between">
            <Input placeholder="Car name" prefix={<AiOutlineUser />} />
            <Button type="primary" icon={<AiOutlinePlus className="text-2xl" />} />
        </form>
    );
};

export default Form;
