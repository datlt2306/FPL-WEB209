import React from "react";
import { Button, Input } from "..";

type Props = {};

const Form = (props: Props) => {
    return (
        <form className="flex justify-between items-center p-2">
            <Input />
            <Button />
        </form>
    );
};

export default Form;
