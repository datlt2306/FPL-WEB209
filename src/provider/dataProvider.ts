import axios from "axios"


const API_URL = `https://api.fake-rest.refine.dev`
// getList({ resrouce: "product"})

type getListParams = {
    resource: string
}
type getOneParams = {
    resource: string,
    id: number
}
type deleteParams = {
    resource: string,
    id: number
}
type createOneParams = {
    resource: string,
    variables: any
}
type updateParams = {
    resource: string,
    variables: any,
    id: number
}
// services => call api => GET|POST|PUT|DELETE
const dataProvider = {
    getList: async ({ resource }: getListParams) => {
        const response = await axios.get(`${API_URL}/${resource}`);
        return {
            data: response.data,
            total: response.data.length
        }
    },
    getOne: async ({ resource, id }: getOneParams) => {
        const response = await axios.get(`${API_URL}/${resource}/${id}`);
        return {
            data: response.data
        }
    },
    createOne: async ({ resource, variables }: createOneParams) => {
        const response = await axios.post(`${API_URL}/${resource}`, variables);
        return {
            data: response.data
        }
    },
    deleteOne: async ({ resource, id }: deleteParams) => {
        const response = await axios.delete(`${API_URL}/${resource}/${id}`);
        return {
            success: true
        }
    },
    updateOne: async ({ resource, id, variables }: updateParams) => {
        const response = await axios.put(`${API_URL}/${resource}/${id}`, variables);
        return {
            data: response.data
        }
    },
}

export const { getList, createOne, deleteOne, updateOne, getOne } = dataProvider;
