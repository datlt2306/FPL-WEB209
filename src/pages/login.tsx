import React from "react";
import { useAppDispatch } from "../app/hook";
import { login } from "../slice/auth";

type Props = {};

const Login = (props: Props) => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <button onClick={() => dispatch(login())}>Login</button>
        </div>
    );
};

export default Login;
