import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOne } from "../provider/dataProvider";


type useCreateParams = {
    resource: string;
}
const useCreate = ({ resource }: useCreateParams) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (variables) => {
            return createOne({ resource, variables })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [resource]
            })
        }
    })
}
export default useCreate;