import { config } from "../api/axios";

type getListType = {
    resource: string;
}
type getOneType = {
    resource: string;
    id: number
}
type createType = {
    resource: string;
    variables: any;
}
type updateType = {
    resource: string;
    variables: any;
    id: number
}
const dataProvider = {
    getList: async ({ resource }: getListType) => {
        const response = await config.get(`/${resource}`);
        return {
            data: response.data
        }
    },
    createOne: async ({ resource, variables }: createType) => {
        const response = await config.post(`/${resource}`, variables);
        return {
            data: response.data
        }
    },
    updateOne: async ({ resource, id, variables }: updateType) => {
        const response = await config.post(`/${resource}/${id}`, variables);
        return {
            data: response.data
        }
    },
}
export const { getList, createOne, updateOne } = dataProvider;

// axios.post(`http://localhost:3000/products`, data);  