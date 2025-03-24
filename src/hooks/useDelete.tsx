import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOne, deleteOne } from "../provider/dataProvider";

type useDeleteParams = {
    resource: string;
};

const useDelete = ({ resource }: useDeleteParams) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => {
            console.log(id);
            return deleteOne({ resource, id });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [resource],
            });
        },
    });
};

export default useDelete;
