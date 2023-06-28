import { Button, Input } from "..";

type Props = {};

const Form = (props: Props) => {
    return (
        <form className="border-b mb-3 p-3 flex justify-between items-center">
            <Input />
            <Button primary>Add</Button>
        </form>
    );
};

export default Form;
