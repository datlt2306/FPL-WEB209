import React from "react";

type helloProps = {
    name: string;
    age: number;
};

const Hello = ({ name, age }: helloProps) => {
    return <div>Hello {age}</div>;
};

export default Hello;
