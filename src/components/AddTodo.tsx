import { ITodo } from "@/interfaces/todo";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type AddTodoProps = {
    addTodo: (todo: ITodo) => void;
};

const AddTodo = (props: AddTodoProps) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<ITodo>();

    const onSubmit: SubmitHandler<ITodo> = (data) => {
        props.addTodo({ id: 123, ...data });
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} />
                <input type="number" {...register("price", { required: true })} />
                {errors.price && <span>This field is required</span>}
                <button>Thêm mới</button>
            </form>
        </>
    );
};

export default AddTodo;
