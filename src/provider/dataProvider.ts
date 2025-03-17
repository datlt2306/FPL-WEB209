import axios from "axios"


const API_URL = `http://localhost:3000`
// getList({ resrouce: "product"})

type getListParams = {
    resource: string
}
const dataProvider = {
    getList: async ({ resource }: getListParams) => {
        const response = await axios.get(`${API_URL}/${resource}`);
        return {
            data: response.data
        }
    }
}

export const { getList } = dataProvider;
