import React from "react";

type helloProps = {
    name: string;
    age: number;
};

const Hello = (props: helloProps) => {
    console.log("props", props);
    return <div>Hello {props.age}</div>;
};

export default Hello;
