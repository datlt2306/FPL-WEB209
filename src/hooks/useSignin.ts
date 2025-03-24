import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOne } from "../provider/dataProvider";
import { signup } from "../provider/authProvider";


type useSigninParams = {
    resource: string,
}

const useSignin = ({ resource }: useSigninParams) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (variables: any) => {
            return signup({ resource, variables })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [resource]
            })
        }
    })
}

export default useSignin;