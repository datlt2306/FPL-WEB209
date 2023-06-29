import { Button, Input } from "..";
import { AiOutlinePlus } from "react-icons/ai";

type Props = {};

const Form = (props: Props) => {
    return (
        <form className="flex justify-between items-center p-2 border border-red-300">
            <Input />
            <Button type="primary" shape="default" icon={<AiOutlinePlus className="text-2xl" />} />
        </form>
    );
};

export default Form;
