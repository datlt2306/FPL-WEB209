import { useQuery } from "@tanstack/react-query";
import { getList } from "../provider/dataProvider";


type useListParams = {
    resource: string
}

const useList = ({ resource }: useListParams) => {
    return useQuery({
        queryKey: [resource],
        queryFn: () => {
            return getList({ resource });
        },
    });

}
export default useList;