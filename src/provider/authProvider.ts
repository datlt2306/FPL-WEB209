import axios from "axios"


const API_URL = `http://localhost:3000`

type signupParams = {
    resource: string,
    variables: any,
}
type signinParams = {
    resource: string,
    variables: any,
}
const dataProvider = {
    signup: async ({ resource, variables }: signupParams) => {
        const response = await axios.post(`${API_URL}/${resource}`, variables);
        return {
            data: response.data
        }
    },
    signin: async ({ resource, variables }: signinParams) => {
        const response = await axios.post(`${API_URL}/${resource}`, variables);
        return {
            data: response.data
        }
    },
}

export const { signup } = dataProvider;
