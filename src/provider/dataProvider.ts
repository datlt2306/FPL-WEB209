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
type deleteType = {
    resource: string;
    id: number
}
const dataProvider = {
    getList: async ({ resource }: getListType) => {
        const response = await config.get(`/${resource}`);
        return {
            data: response.data
        }
    },
    getOne: async ({ resource, id }: getOneType) => {
        const response = await config.get(`/${resource}/${id}`);
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
        const response = await config.put(`/${resource}/${id}`, variables);
        return {
            data: response.data
        }
    },
    deleteOne: async ({ resource, id }: deleteType) => {
        const response = await config.delete(`/${resource}/${id}`);
        return {
            success: true
        }
    },
}
export const { getList, createOne, updateOne, deleteOne, getOne } = dataProvider;
