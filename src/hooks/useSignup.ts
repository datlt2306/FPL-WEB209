import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../provider/authProvider";


type useSignupParams = {
    resource: string;
}
const useSignup = ({ resource }: useSignupParams) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (variables) => {
            return signup({ resource, variables })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [resource]
            })
        }
    })
}
export default useSignup;