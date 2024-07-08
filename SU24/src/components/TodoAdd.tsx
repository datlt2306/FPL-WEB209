/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useForm } from "react-hook-form";

const TodoAdd = ({ onSubmit }: any) => {
    const { register, handleSubmit } = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("title")} />
            <button type="submit">Thêm</button>
        </form>
    );
};

export default TodoAdd;
