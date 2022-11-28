import { SubmitHandler, useForm } from "react-hook-form";
import { IAuth } from "../interfaces/auth";
import { useSigninMutation } from "../services/auth";

// window : ctrl + shift + o
// macos : option + shift + o
const Signin = () => {
    const [useSignin] = useSigninMutation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IAuth>();

    const onSubmit: SubmitHandler<IAuth> = (data) => {
        useSignin(data)
            .unwrap()
            .then((response) => {
                localStorage.setItem("user", response);
            });
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

export default Signin;
