import instance from '@/configs/axios'
import { AxiosResponse } from 'axios'
// import { IProduct } from '@/common/types/product'
// const userDataString = localStorage.getItem('user');
// let token = '';
// if (userDataString) {
//     try {
//         const userData = JSON.parse(userDataString);
//         token = userData.token || '';
//     } catch (error) {
//         console.error('Không thể phân tích dữ liệu từ localStorage:', error);
//     }
// }
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAllProducts = async (params?: any): Promise<AxiosResponse<any>> => {
    try {
        const response = await instance.get('/products', { params })
        return response;
    } catch (error) {
        return {
            data: [],
            status: 500,
            statusText: 'Internal Server Error',
            headers: {},
            config: {} as any
        }
    }
}
// export const getProductById = async (id: number | string) => {
//     try {
//         const response = await instance.get(`/products/${id}`)
//         return response.data
//     } catch (error) {
//         console.log(error)
//     }
// }
// export const addProduct = async (product: IProduct) => {
//     try {
//         const response = await instance.post(`/products`, product, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 "Authorization": "Bearer " + token ? token : ''
//             },
//         })
//         return response.data
//     } catch (error) {
//         console.log(error)
//     }
// }
// export const removeProduct = async (product: IProduct) => {
//     try {
//         const response = await instance.delete(`/products/${product._id}`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 "Authorization": "Bearer " + token ? token : ''
//             },
//         })
//         return response.data
//     } catch (error) {
//         console.log(error)
//     }
// }
// export const editProduct = async (product: IProduct) => {
//     try {
//         const response = await instance.put(`/products/${product._id}`, product, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 "Authorization": "Bearer " + token ? token : ''
//             },
//         })
//         return response.data
//     } catch (error) {
//         console.log(error)
//     }
// }

