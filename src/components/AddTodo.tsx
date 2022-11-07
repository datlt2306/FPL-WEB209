import { useForm, SubmitHandler } from "react-hook-form";
import { ITodo } from "../interfaces/todo";

type TodoProps = {
    addTodo: (todo: ITodo) => void;
};
const AddTodo = (props: TodoProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ITodo>();

    const onHandleSubmit: SubmitHandler<ITodo> = (data) => {
        // bắn dữ liệu lên trên todo
        props.addTodo(data);
    };
    return (
        <>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <input {...register("name")} />
                <input {...register("price", { required: true })} />
                {errors.price && <span>This field is required</span>}
                <button>Add Todo</button>
            </form>
        </>
    );
};

export default AddTodo;
