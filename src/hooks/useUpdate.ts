import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOne, getOne, updateOne } from "../provider/dataProvider";


type useUpdateParams = {
    resource: string,
    id: number
}

const useUpdate = ({ resource, id }: useUpdateParams) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (variables: any) => {
            return updateOne({ resource, variables, id })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [resource]
            })
        }
    })
}

export default useUpdate;