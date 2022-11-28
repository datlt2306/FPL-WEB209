import { SubmitHandler, useForm } from "react-hook-form";
import { IAuth } from "../interfaces/auth";
import { useSignupMutation } from "../services/auth";

// window : ctrl + shift + o
// macos : option + shift + o
const Signup = () => {
    const [useSignup] = useSignupMutation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IAuth>();

    const onSubmit: SubmitHandler<IAuth> = (data) => {
        useSignup(data)
            .unwrap()
            .then((response) => console.log(response));
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
