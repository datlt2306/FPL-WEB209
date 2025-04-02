import { useQuery } from "@tanstack/react-query";
import { getList } from "../provider/dataProvider";


type useListParams = {
    resource: string;
}
// useList({resource: 'users'})

const useList = ({ resource }: useListParams) => {
    return useQuery({
        queryKey: [resource],
        queryFn: async () => getList({ resource }),
    });
}
export default useList;

// useList()