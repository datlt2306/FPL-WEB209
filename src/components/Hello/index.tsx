import React from "react";

type Props = {
    name: string;
};

const Hello = (props: Props) => {
    console.log(props); // { name: "Le Trong Dat" }
    return <div>Hello {props.name}</div>;
};

export default Hello;
