import { useMutation } from "@tanstack/react-query";
import { createOne } from "../api/dataProvider";


type useCreateParams = {
    resource: string;
    variables: any;
}
const useCreate = ({ resource }: useCreateParams) => {
    return useMutation({
        mutationFn: (variables: string) => {
            return createOne({ resource, variables })
        }
    })
}
export default useCreate;