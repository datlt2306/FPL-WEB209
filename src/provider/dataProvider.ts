import { config } from './axios';

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
const dataProvider = {
    getList: async ({ resource }: getListType) => {
        const response = await config.get(`/${resource}`);
        return {
            data: response.data
        }
    },
}
export const { getList } = dataProvider;

// axios.post(`http://localhost:3000/products`, data);  