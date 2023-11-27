import instance from "@/core/api"

export const signup = async (user: any) => {
    try {
        const response = await instance.post(`/signup`, user);
        return response.data;
    } catch (error) {
        console.log("SIGNUP_ERROR", error);
    }
}