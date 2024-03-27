import axiosInstance from "../config/axios";


export const getAllProducts = async () => {
    try {
        const { data } = await axiosInstance.get(`/products`)
        return data
    } catch (error) {
        console.log(error)
    }
}