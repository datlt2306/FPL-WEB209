import { config } from "../api/axios";
type signupType = {
    resource: string;
    variables: any;
}
type signinType = {
    resource: string;
    variables: any;
}
const authProvider = {

    signup: async ({ resource, variables }: signupType) => {
        const response = await config.post(`/${resource}`, variables);
        return {
            data: response.data
        }
    },
    signin: async ({ resource, variables }: signinType) => {
        const response = await config.post(`/${resource}`, variables);
        return {
            data: response.data
        }
    },
}
export const { signup, signin } = authProvider;
