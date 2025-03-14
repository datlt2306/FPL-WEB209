import { config } from './axios';

const dataProvider = {
    getList: async ({ resource }: { resource: string }) => {
        const response = await config.get(`/${resource}`);
        return {
            data: response.data
        }
    },
}

export const getList = dataProvider.getList;