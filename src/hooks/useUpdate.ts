import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOne, updateOne } from "../provider/dataProvider";


type useUpdateParams = {
    resource: string;
    id: number
}
const useUpdate = ({ resource, id }: useUpdateParams) => {
    // gọi useQueryClient để làm mới API ( gọi lại API )
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (variables: string) => {
            return updateOne({ resource, id, variables })
        },
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [resource]
        })
    })
}
export default useUpdate;