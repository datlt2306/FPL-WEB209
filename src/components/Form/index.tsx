import { Button, Input } from "..";
import { BsPlus } from "react-icons/bs";

type Props = {};

const Form = (props: Props) => {
    return (
        <form className="flex justify-between items-center py-2">
            <Input />
            <Button shape="round" type="primary" icon={<BsPlus className="text-2xl" />} />
        </form>
    );
};

export default Form;
