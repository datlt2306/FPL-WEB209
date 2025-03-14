import { config } from './axios';


const dataProvider = {
    getList: async ({ resource }: { resource: string }) => {
        const response = await config.get(`/${resource}`);
        return response.data;
    },
    getOne: async ({ resource, id }: { resource: string, id: number }) => {
        const response = await config.get(`/${resource}/${id}`);
        return response.data;
    },
    create: async ({ resource, variables }: { resource: string, variables: any }) => {
        const response = await config.get(`/${resource}`, variables);
        return response.data;
    }
}

export const getList = dataProvider.getList;