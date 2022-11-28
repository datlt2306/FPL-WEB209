import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../app/hook";
import { IAuth } from "../interfaces/auth";
import { useSignupMutation } from "../services/auth";
import { signupApi } from "../slice/auth";

const Signup = () => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IAuth>();

    const onSubmit: SubmitHandler<IAuth> = (data) => {
        dispatch(signupApi(data));
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("email")} />
                <input type="password" {...register("password")} />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Signup;
