import axios from "axios"


const API_URL = `https://api.fake-rest.refine.dev`
// getList({ resrouce: "product"})

type getListParams = {
    resource: string
}
type createOneParams = {
    resource: string,
    variables: any
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
    createOne: async ({ resource, variables }: createOneParams) => {
        const response = await axios.post(`${API_URL}/${resource}`, variables);
        return {
            data: response.data
        }
    }
}

export const { getList, createOne } = dataProvider;
